/* eslint-disable */
// @ts-ignore
import {
  AxiosPromise as RequestPromise,
  AxiosRequestConfig as RequestConfig,
} from "axios";
import * as defs from "../../service/axios";

const MockUrl = "https://yapi.vesync.com/mock/536";
//#region interface:3153
/**
 * deleteFileListV2
 */
export function postFileServiceV2FileDeleteFileListV2(
  body: CloudFileService.Request.IPostFileServiceV2FileDeleteFileListV2Request,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudFileService.Response.IPostFileServiceV2FileDeleteFileListV2Response> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/fileService/v2/file/deleteFileListV2`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * deleteFileV2
 */
export function postFileServiceV2FileDeleteFileV2(
  body: CloudFileService.Request.IPostFileServiceV2FileDeleteFileV2Request,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudFileService.Response.IPostFileServiceV2FileDeleteFileV2Response> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/fileService/v2/file/deleteFileV2`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getFileUploadUrlListV2
 */
export function postFileServiceV2FileGetFileUploadUrlListV2(
  body: CloudFileService.Request.IPostFileServiceV2FileGetFileUploadUrlListV2Request,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudFileService.Response.IPostFileServiceV2FileGetFileUploadUrlListV2Response> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/cloud/v2/file/getFileUploadUrlListV2`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getFileUploadUrlV2
 */
export function postFileServiceV2FileGetFileUploadUrlV2(
  body: CloudFileService.Request.IPostFileServiceV2FileGetFileUploadUrlV2Request,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudFileService.Response.IPostFileServiceV2FileGetFileUploadUrlV2Response> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/fileService/v2/file/getFileUploadUrlV2`,
    body,
    {
      ...configs,
    }
  );
}
//#endregion interface:3153

//#region interface:4208
/**
 * deleteFileV3
 */
export function postFileServiceV3FileDeleteFileV3(
  body: CloudFileService.Request.IPostFileServiceV3FileDeleteFileV3Request,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudFileService.Response.IPostFileServiceV3FileDeleteFileV3Response> {
  return defs.$axios.post(
    `${isMock && MockUrl ? MockUrl : ""}/fileService/v3/file/deleteFileV3`,
    body,
    {
      ...configs,
    }
  );
}
/**
 * getFileUploadUrlListV3
 */
export function postFileServiceV3FileGetFileUploadUrlListV3(
  body: CloudFileService.Request.IPostFileServiceV3FileGetFileUploadUrlListV3Request,
  configs?: RequestConfig,
  isMock?: boolean
): RequestPromise<CloudFileService.Response.IPostFileServiceV3FileGetFileUploadUrlListV3Response> {
  return defs.$axios.post(
    `${
      isMock && MockUrl ? MockUrl : ""
    }/fileService/v3/file/getFileUploadUrlListV3`,
    body,
    {
      ...configs,
    }
  );
}
//#endregion interface:4208
