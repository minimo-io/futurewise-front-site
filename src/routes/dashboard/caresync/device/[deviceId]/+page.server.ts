// src/routes/dashboard/caresync/device/[deviceId]/+page.server.ts
import { dashboardCommonActions } from '../../..';
import type { PageServerLoad } from './$types';
import { postgreService } from '$lib/databases/postgre.service';
import { error, fail, type Actions } from '@sveltejs/kit';
import type { Device, DeviceHistoryEvent } from '$lib/type/caresync-machines.types';

export const actions: Actions = {
	...dashboardCommonActions,

	updateServiceHistory: async ({ request }) => {
		// const { deviceId } = params;
		const formData = await request.formData();
		const historyId = formData.get('historyId') as string;
		const description = formData.get('description') as string;

		if (!historyId || !description) {
			return fail(400, {
				error: 'History ID and description are required'
			});
		}

		try {
			// Update the service history record
			const updatedRecord = await postgreService.execute(async (knex) => {
				return knex('CareSync_Device_History')
					.where('id', historyId)
					.update({
						description: description.trim(),
						updated_at: new Date()
					})
					.returning('*');
			});

			if (!updatedRecord || updatedRecord.length === 0) {
				return fail(404, {
					error: 'Service history record not found'
				});
			}

			return {
				success: true,
				message: 'Service history updated successfully'
			};
		} catch (err) {
			console.error('Error updating service history:', err);
			return fail(500, {
				error: 'Failed to update service history'
			});
		}
	}
};

export const load: PageServerLoad = async ({ params }) => {
	const { deviceId } = params;

	if (!deviceId) {
		throw error(400, 'Device ID is required');
	}

	try {
		const device: Device = await postgreService.execute<Device>(async (knex) => {
			return knex('CareSync_Reports').select('*').where('id', deviceId).first();
		});

		if (!device) {
			throw error(404, 'Device not found');
		}

		const deviceHistory = await postgreService.execute<DeviceHistoryEvent[]>(async (knex) => {
			return knex('CareSync_Device_History as h')
				.select('h.*', 't.name as technician_name', 't.id as technician_id')
				.leftJoin('CareSync_Technicians as t', 'h.technician_id', 't.id')
				.where('h.report_id', deviceId)
				.orderBy('h.event_time', 'desc');
		});

		return { device, deviceHistory };
	} catch (err) {
		console.error('Error loading device history:', err);
		throw error(500, 'Failed to load device history');
	}
};
