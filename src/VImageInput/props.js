import Function_constant from '/utils/Function/constant';

export default {
	clearable: {
		type: Boolean,
		default: false,
	},

	clearIcon: {
		type: [Function, String],
		default() {
			return this.$vuetify.icons.clear;
		},
	},

	disabled: {
		type: Boolean,
		default: false,
	},

	flipHorizontallyIcon: {
		type: [Function, String],
		default: 'flip',
	},

	flipHorizontallyIconStyle: [Function, Object],

	flipHorizontallyText: {
		type: [Function, String],
		default: 'flip horizontally',
	},

	flipVerticallyIcon: {
		type: [Function, String],
		default: 'flip',
	},

	flipVerticallyIconStyle: {
		type: [Function, Object],
		default: Function_constant({transform: 'rotate(90deg)'}),
	},

	flipVerticallyText: {
		type: [Function, String],
		default: 'flip vertically',
	},

	fullHeight: {
		type: Boolean,
		default: false,
	},

	fullWidth: {
		type: Boolean,
		default: false,
	},

	hideActions: {
		type: Boolean,
		default: false,
	},

	imageEncoderOptions: {},

	imageHeight: {
		type: Number,
		default: 256,
	},

	imageType: {
		type: String,
		default: 'png',
	},

	imageWidth: {
		type: Number,
		default: 256,
	},

	readonly: {
		type: Boolean,
		default: false,
	},

	rotateClockwiseIcon: {
		type: [Function, String],
		default: 'rotate_90_degrees_ccw',
	},

	rotateClockwiseIconStyle: {
		type: [Function, Object],
		default: Function_constant({transform: 'scaleX(-1)'}),
	},

	rotateClockwiseText: {
		type: [Function, String],
		default: 'rotate clockwise',
	},

	rotateCounterclockwiseIcon: {
		type: [Function, String],
		default: 'rotate_90_degrees_ccw',
	},

	rotateCounterclockwiseIconStyle: [Function, Object],

	rotateCounterclockwiseText: {
		type: [Function, String],
		default: 'rotate counterclockwise',
	},

	uploadIcon: {
		type: [Function, String],
		default: 'cloud_upload',
	},

	uploadIconStyle: [Function, Object],

	value: String,
};
