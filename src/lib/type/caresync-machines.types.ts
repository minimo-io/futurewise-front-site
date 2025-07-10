export interface Machine {
	id: string;
	device_id: string;
	online: boolean;
	status: MachineStatus;
	type: MachineType;
	remoteAccess: boolean;
	organization: string;
	user: MachineContact;
	lastService: string;
	nextService: string;
	timeActive: number;
	serialNumber: string;
	brand: string;
	model: string;
}

export enum MachineStatus {
	ALERT = 'ALERT',
	BOM = 'FINE',
	PROBLEMS = 'PROBLEMS',
	MONITORING = 'MONITORING',
	NO_DATA = 'NO_DATA'
}

export enum MachineType {
	NOTEBOOK = 'NOTEBOOK',
	DESKTOP = 'DESKTOP',
	ALLINONE = 'ALLINONE'
}

export interface MachineContact {
	name: string;
	state: string;
	city: string;
	image: string;
	contact: {
		type: 'whatsapp' | 'telephone' | 'email';
		value: string;
	};
}
