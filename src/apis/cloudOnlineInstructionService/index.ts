/* eslint-disable */
// @ts-ignore
import {
  AxiosPromise as RequestPromise,
  AxiosRequestConfig as RequestConfig,
} from "axios";
import * as defs from "../../service/axios";

const MockUrl = "https://yapi.vesync.com/mock/483";
// const MockUrl = "http://192.168.104.74:3000/mock/521"
//#region interface:3521
/**
 * getTextList
 */
export function postIdataOnlineInstructionV1TextManageGetTextList(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1TextManageGetTextListRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1TextManageGetTextListResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/textManage/getTextList`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * importText
 */
export function postIdataOnlineInstructionV1TextManageImportText(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1TextManageImportTextRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1TextManageImportTextResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/textManage/importText`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * resetText
 */
export function postIdataOnlineInstructionV1TextManageResetText(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1TextManageResetTextRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1TextManageResetTextResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/textManage/resetText`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * updateText
 */
export function postIdataOnlineInstructionV1TextManageUpdateText(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1TextManageUpdateTextRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1TextManageUpdateTextResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/textManage/updateText`,
    body,
    {
      ...configs,
    }
  );
}
//#endregion interface:3521

//#region interface:3523
/**
 * deletePicture
 */
export function postIdataOnlineInstructionV1PictureManageDeletePicture(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PictureManageDeletePictureRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PictureManageDeletePictureResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pictureManage/deletePicture`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getPictureList
 */
export function postIdataOnlineInstructionV1PictureManageGetPictureList(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PictureManageGetPictureListRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PictureManageGetPictureListResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pictureManage/getPictureList`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * uploadPicture
 */
export function postIdataOnlineInstructionV1PictureManageUploadPicture(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PictureManageUploadPictureRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PictureManageUploadPictureResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pictureManage/uploadPicture`,
    body,
    {
      ...configs,
    }
  );
}
//#endregion interface:3523

//#region interface:3525
/**
 * addParentPage
 */
export function postIdataOnlineInstructionV1PageManageAddParentPage(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageAddParentPageRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageAddParentPageResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/addParentPage`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * addSubPage
 */
export function postIdataOnlineInstructionV1PageManageAddSubPage(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageAddSubPageRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageAddSubPageResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/addSubPage`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * deletePage
 */
export function postIdataOnlineInstructionV1PageManageDeletePage(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageDeletePageRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageDeletePageResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/deletePage`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * exchangePage
 */
export function postIdataOnlineInstructionV1PageManageExchangePage(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageExchangePageRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageExchangePageResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/exchangePage`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getPageOutLine
 */
export function postIdataOnlineInstructionV1PageManageGetPageOutLine(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageGetPageOutLineRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/getPageOutLine`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getSubPageInfo
 */
export function postIdataOnlineInstructionV1PageManageGetSubPageInfo(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageGetSubPageInfoRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/getSubPageInfo`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * updateParentPage
 */
export function postIdataOnlineInstructionV1PageManageUpdateParentPage(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageUpdateParentPageRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageUpdateParentPageResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/updateParentPage`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * updateSubPage
 */
export function postIdataOnlineInstructionV1PageManageUpdateSubPage(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1PageManageUpdateSubPageRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1PageManageUpdateSubPageResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/pageManage/updateSubPage`,
    body,
    {
      ...configs,
    }
  );
}
//#endregion interface:3525

//#region interface:3527
/**
 * addOrUpdateManual
 */
export function postIdataOnlineInstructionV1DesignManageAddOrUpdateManual(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/designManage/addOrUpdateManual`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * deleteManual
 */
export function postIdataOnlineInstructionV1DesignManageDeleteManual(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1DesignManageDeleteManualRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageDeleteManualResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/designManage/deleteManual`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * exportManualExcel
 */
export function postIdataOnlineInstructionV1DesignManageExportManualExcel(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1DesignManageExportManualExcelRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageExportManualExcelResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/designManage/exportManualExcel`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getAllLanguageByManualId
 */
export function postIdataOnlineInstructionV1DesignManageGetAllLanguageByManualId(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/designManage/getAllLanguageByManualId`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getManualListByUserId
 */
export function postIdataOnlineInstructionV1DesignManageGetManualListByUserId(
  body: CloudOnlineInstructionService.Request.IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdRequest,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudOnlineInstructionService.Response.IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponse> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/idata/onlineInstruction/v1/designManage/getManualListByUserId`,
    body,
    {
      ...configs,
    }
  );
}
//#endregion interface:3527
