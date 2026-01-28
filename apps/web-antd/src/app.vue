<script lang="ts" setup>
import { computed } from 'vue';

import { useAntdDesignTokens } from '@vben/hooks';
import { preferences, usePreferences } from '@vben/preferences';

import { App, ConfigProvider, theme } from 'antdv-next';

import { antdLocale } from '#/locales';

import { waveConfigs } from './components/global/button-wave';
import { PopupContext } from './utils/context';

defineOptions({ name: 'App' });

const { isDark } = usePreferences();
const { tokens } = useAntdDesignTokens();

const tokenTheme = computed(() => {
  const algorithm = isDark.value
    ? [theme.darkAlgorithm]
    : [theme.defaultAlgorithm];

  // antd 紧凑模式算法
  if (preferences.app.compact) {
    algorithm.push(theme.compactAlgorithm);
  }

  return {
    algorithm,
    token: tokens,
  };
});

// 按钮水波纹样式配置
const waveConfig = computed(() => {
  const { buttonWaveMode } = preferences.theme;
  const found = waveConfigs.find((item) => item.name === buttonWaveMode);
  return found ? found.wave : {};
});
</script>

<template>
  <ConfigProvider :locale="antdLocale" :theme="tokenTheme" :wave="waveConfig">
    <App>
      <RouterView />
      <PopupContext />
    </App>
  </ConfigProvider>
</template>

<style lang="scss">
body {
  /**
   * 全局启用 抗锯齿字体
   * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-smooth
   */
  @apply antialiased;
}
</style>
