const blockAttributes = {
	isPreview: {
		type: 'boolean',
		default: false,
		save: false,
	},
	useShippingAsBilling: {
		type: 'boolean',
		default: true,
	},
	showCompanyField: {
		type: 'boolean',
		default: false,
	},
	requireCompanyField: {
		type: 'boolean',
		default: false,
	},
	showAddress2Field: {
		type: 'boolean',
		default: true,
	},
	showPhoneField: {
		type: 'boolean',
		default: true,
	},
	requirePhoneField: {
		type: 'boolean',
		default: false,
	},
};

export default blockAttributes;