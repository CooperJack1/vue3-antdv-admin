import type { FormSchema } from '@/components/core/schema-form/';

export const citySchemas: FormSchema<API.CityDto>[] = [
  {
    field:'cityName',
    component: 'Input',
    label: '城市名称',
    rules: [{ required: true, type: 'string' }],
    colProps: {
      span: 20,
    },
  },
];
