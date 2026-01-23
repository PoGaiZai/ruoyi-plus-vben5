import { createIconifyOfflineIcon } from '@vben-core/icons';

import folderIcon from '@iconify/icons-flat-color-icons/folder';
import menuIcon from '@iconify/icons-material-symbols/menu';
import okButtonIcon from '@iconify/icons-mdi/button-pointer';
import dingdingFill from '@iconify/icons-ri/dingding-fill';
import giteeIcon from '@iconify/icons-simple-icons/gitee';

import './menu-icons';

// 第三方登录相关图标
export const DingdingIcon = createIconifyOfflineIcon(
  'ri:dingding-fill',
  dingdingFill,
);
export const GiteeIcon = createIconifyOfflineIcon(
  'simple-icons:gitee',
  giteeIcon,
);

// 菜单类型 目录/按钮/菜单
export const FolderIcon = createIconifyOfflineIcon(
  'flat-color-icons:folder',
  folderIcon,
);
export const OkButtonIcon = createIconifyOfflineIcon(
  'mdi:button-pointer',
  okButtonIcon,
);
export const MenuIcon = createIconifyOfflineIcon(
  'material-symbols:menu',
  menuIcon,
);
