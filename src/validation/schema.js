import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),
    size: yup
    .string()
    .oneOf(['Small', 'Medium', 'Large'])
    .required('Please pick a size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    mushroom: yup.boolean(),
    special: yup.string()
})

export default schema;