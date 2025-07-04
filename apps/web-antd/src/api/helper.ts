import { $t } from '@vben/locales';

import { message } from 'ant-design-vue';

import { useAuthStore } from '#/store';

import { requestClient } from './request';

/**
 * @description:  contentType
 */
export const ContentTypeEnum = {
  // form-data  upload
  FORM_DATA: 'multipart/form-data;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
  // json
  JSON: 'application/json;charset=UTF-8',
} as const;

/**
 * 通用下载接口 封装一层
 * @param url 请求地址
 * @param data  请求参数
 * @returns blob二进制
 */
export function commonExport(url: string, data: Record<string, any>) {
  return requestClient.post<Blob>(url, data, {
    data,
    headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    isTransformResponse: false,
    responseType: 'blob',
  });
}

/**
 * 定义一个401专用异常 用于可能会用到的区分场景?
 */
export class UnauthorizedException extends Error {}

/**
 * 是否已经处在登出过程中了 一个标志位
 * 主要是防止一个页面会请求多个api 都401 会导致登出执行多次
 */
let isLogoutProcessing = false;

/**
 * 登出逻辑 两个地方用到 提取出来
 * @throws UnauthorizedException 抛出特定的异常
 */
export function handleUnauthorizedLogout() {
  const timeoutMsg = $t('http.loginTimeout');

  // 已经在登出过程中 不再执行
  if (isLogoutProcessing) {
    throw new UnauthorizedException(timeoutMsg);
  }
  isLogoutProcessing = true;
  const userStore = useAuthStore();
  userStore.logout().finally(() => {
    message.error(timeoutMsg);
    isLogoutProcessing = false;
  });
  // 不再执行下面逻辑
  throw new UnauthorizedException(timeoutMsg);
}
