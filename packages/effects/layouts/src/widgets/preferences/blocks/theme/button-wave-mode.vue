<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@vben-core/shadcn-ui';

defineOptions({
  name: 'PreferenceButtonWaveMode',
});

const modelValue = defineModel<string>('themeButtonWaveMode', {
  default: 'default',
});

const items = [
  { label: 'Default', value: 'Default' },
  { label: 'Disabled', value: 'Disabled' },
  { label: 'Happy', value: 'Happy' },
  { label: 'Inset', value: 'Inset' },
  { label: 'Shake', value: 'Shake' },
];
</script>

<template>
  <ToggleGroup
    v-model="modelValue"
    class="gap-2"
    size="sm"
    type="single"
    variant="outline"
  >
    <template v-for="item in items" :key="item.value">
      <ToggleGroupItem
        :value="item.value"
        class="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground h-7 rounded-sm px-2"
      >
        {{ item.label }}
      </ToggleGroupItem>
    </template>
  </ToggleGroup>
</template>
