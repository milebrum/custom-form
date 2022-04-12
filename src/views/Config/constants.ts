export const formOptions = [{
    id: 'style',
    type: 'radio',
    title: 'Style',
    options: ['linear-gradient', 'radial-gradient'],
    display: true,
}, {
    id: 'direction',
    type: 'radio',
    title: 'Direction',
    options: ['to left top', 'to top', 'to right top', 'to left', 'at center center', 'to right', 'to left bottom', 'to bottom', 'to right bottom'],
    display: true,
}, {
    id: 'colours',
    type: 'colour',
    title: 'Colors',
    display: true,
    popover: { isOpen: false },
}, {
    id: 'outputFormat',
    type: 'radio',
    title: 'Output format',
    options: ['hex', 'rgba'],
    display: true,
}, {
    id: 'name',
    type: 'input',
    title: 'Template Name',
    label: 'Name your template',
    display: false,
}, {
    id: 'author',
    type: 'input',
    title: 'Author',
    label: 'Your name or nickname',
    display: false,
},
];