// eslint-disable @typescript-eslint/no-explicit-any
import { Select } from '@components/select/select';
import { useFilter } from '@modules/filters/filter.hook';

export const Filters = (props: any) => {
  const {
    powerPlantsOptions,
    zonesOptions,
    alertTypesOptions,
    powerOptions,
    supervisorsOptions,
  } = props;
  const { t } = useFilter();
  return (
    <div className="flex gap-x-l px-xl">
      <Select
        options={powerPlantsOptions}
        onChange={(item) => console.log(item)}
        isMulti
        placeholder={t('powerPlants')}
        value={powerPlantsOptions}
      />
      <Select
        options={zonesOptions}
        onChange={(item) => console.log(item)}
        isMulti
        placeholder={t('zone')}
        value={powerPlantsOptions}
      />
      <Select
        options={alertTypesOptions}
        onChange={(item) => console.log(item)}
        isMulti
        placeholder={t('alarms')}
        value={powerPlantsOptions}
      />
      <Select
        options={powerOptions}
        onChange={(item) => console.log(item)}
        placeholder={t('power')}
        value={powerPlantsOptions}
      />
      <Select
        options={supervisorsOptions}
        onChange={(item) => console.log(item)}
        isMulti
        placeholder={t('supervisor')}
        value={powerPlantsOptions}
      />
    </div>
  );
};
