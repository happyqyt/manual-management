import {
  Picture,
  Document,
  Brush,
  Notebook
} from '@element-plus/icons-vue'

import { MENU } from '../../types/menus'


/*
 * 为保持美观，第一层级菜单必须设置icon，子级菜单没有icon
 */
const menus:MENU[] = [
  {
    "text": "文案",
    "path": "/text",
    "icon": Document
  }, {
    "text": "图片",
    "icon": Picture,
    "path": "/picture"
  }, {
    "text": "页面",
    "icon": Notebook,
    "path": "/page"
  }, {
    "text": "设计",
    "icon": Brush,
    "path": "/design"
  }
]

export default menus
