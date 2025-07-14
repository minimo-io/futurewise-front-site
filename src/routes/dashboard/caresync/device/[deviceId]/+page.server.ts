import { dashboardCommonActions } from '../../..';
import type { PageServerLoad } from './$types';
import { postgreService } from '$lib/databases/postgre.service';
import { error } from '@sveltejs/kit';
import type { Device, DeviceHistoryEvent } from '$lib/type/caresync-machines.types';

export const actions = dashboardCommonActions;

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
