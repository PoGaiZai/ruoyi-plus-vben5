import type { FormSchemaGetter } from '#/adapter/form';
import type { VxeGridProps } from '#/adapter/vxe-table';

import dayjs from 'dayjs';

import { renderBrowserIcon, renderOsIcon } from '#/utils/render';

export const querySchema: FormSchemaGetter = () => [
  {
    component: 'Input',
    fieldName: 'ipaddr',
    label: 'IP地址',
  },
  {
    component: 'Input',
    fieldName: 'userName',
    label: '用户账号',
  },
];

export const columns: VxeGridProps['columns'] = [
  {
    title: '登录平台',
    field: 'deviceType',
  },
  {
    title: '登录账号',
    field: 'userName',
  },
  {
    title: '部门名称',
    field: 'deptName',
  },
  {
    title: 'IP地址',
    field: 'ipaddr',
  },
  {
    title: '登录地址',
    field: 'loginLocation',
  },
  {
    title: '浏览器',
    field: 'browser',
    slots: {
      default: ({ row }) => {
        return (
          <div class="flex items-center justify-center gap-[6px]">
            {renderBrowserIcon(row.browser, 'shrink-0')}
            {row.browser}
          </div>
        );
      },
    },
  },
  {
    title: '系统',
    field: 'os',
    slots: {
      default: ({ row }) => {
        return (
          <div class="flex items-center justify-center gap-[6px]">
            {renderOsIcon(row.os, 'shrink-0')}
            {row.os}
          </div>
        );
      },
    },
  },
  {
    title: '登录时间',
    field: 'loginTime',
    formatter: ({ cellValue }) => {
      return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  {
    field: 'action',
    fixed: 'right',
    slots: { default: 'action' },
    title: '操作',
    resizable: false,
    width: 'auto',
  },
];
