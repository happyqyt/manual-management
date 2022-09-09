/* eslint-disable */
// @ts-ignore
declare namespace CloudFileService {
  namespace Request {
    //#region request:3153
    /**
     * req
     */
    export interface IPostFileServiceV2FileDeleteFileListV2Request {
      /**
       * 请求列表（可复数请求）
       */
      fileList: IPostFileServiceV2FileDeleteFileListV2RequestFileList[];
      /**
       * 类型，需要根据这个参数判断文件的目标地址
       */
      type: string;
      [k: string]: any;
    }
    /**
     * KeyNameForFileUpload
     */
    export interface IPostFileServiceV2FileDeleteFileListV2RequestFileList {
      /**
       * 文件访问路径，将根据此进行删除
       */
      accessUrl: string;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostFileServiceV2FileDeleteFileV2Request {
      /**
       * 文件访问路径，将根据此进行删除
       */
      accessUrl: string;
      /**
       * 上传类型，需要根据这个参数判断上传的目的地
       */
      type: string;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlListV2Request {
      /**
       * 请求列表，如果其中一个产生错误，将不会影响其他请求
       */
      fileList: IPostFileServiceV2FileGetFileUploadUrlListV2RequestFileList[];
      /**
       * 上传类型，需要根据这个参数判断上传的目的地smartBpDataFile、yubikeyFile、feedbackFile、feedbackImage、deviceImage、profilePhotoImage、vmallImage、commentImage、mallVideo等。更多支持type见链接：https://yapi.vesync.com/project/536/wiki
       */
      type: string;
      [k: string]: any;
    }
    /**
     * KeyNameForFileUpload
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlListV2RequestFileList {
      /**
       * 内容类型，即上传文件时的类型。不同type支持的链接见文档：https://yapi.vesync.com/project/536/wiki
       */
      contentType: string;
      /**
       * 文件大小（byte）文件大小限制见文档：https://yapi.vesync.com/project/536/wiki
       */
      contentLengthByte: number;
      /**
       * 文件内容md5，进行完整性校验和文件唯一性判断。
       * md5计算算法为：base64-encoded 128-bit MD5 digest
       * 举例案例见文档：https://wiki.vesync.cn/pages/viewpage.action?pageId=361660752
       */
      md5: string;
      /**
       * 文件名，如：quanah.jpg，不可携带目录
       */
      fileName: string;
      [k: string]: any;
    }

    /**
     * KeyNameForFileUpload
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlV2Request {
      /**
       * 内容类型，即上传文件时的类型。
       * 不同type支持的链接见文档：https://wiki.vesync.cn/pages/viewpage.action?pageId=361660752
       */
      contentType: string;
      /**
       * 上传类型，需要根据这个参数判断上传的目的地
       * smartBpDataFile、yubikeyFile、feedbackFile、feedbackImage、deviceImage、profilePhotoImage、vmallImage、commentImage、mallVideo等。
       * 更多支持type见链接：https://wiki.vesync.cn/pages/viewpage.action?pageId=361660752
       */
      type: string;
      /**
       * 文件大小（byte）
       * 文件大小限制见文档：https://wiki.vesync.cn/pages/viewpage.action?pageId=361660752
       */
      contentLengthByte: number;
      /**
       * 文件内容md5，进行完整性校验和文件唯一性判断。
       * md5计算算法为：base64-encoded 128-bit MD5 digest
       * 举例案例见文档：https://wiki.vesync.cn/pages/viewpage.action?pageId=361660752
       */
      md5: string;
      /**
       * 文件名，如quanah.jpg，不可携带目录
       */
      fileName: string;
      [k: string]: any;
    }

    //#endregion request:3153
    //#region request:4208
    /**
     * req
     */
    export interface IPostFileServiceV3FileDeleteFileV3Request {
      /**
       * 文件访问路径，将根据此进行删除
       */
      accessUrl: string;
      /**
       * 上传类型，需要根据这个参数判断上传的目的地
       */
      type: string;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostFileServiceV3FileGetFileUploadUrlListV3Request {
      /**
       * 请求列表，如果其中一个产生错误，将不会影响其他请求
       */
      fileList: IPostFileServiceV3FileGetFileUploadUrlListV3RequestFileList[];
      /**
       * 上传类型，需要根据这个参数判断上传的目的地smartBpDataFile、yubikeyFile、feedbackFile、feedbackImage、deviceImage、profilePhotoImage、vmallImage、commentImage、mallVideo等。更多支持type见链接：https://yapi.vesync.com/project/536/wiki
       */
      type: string;
      [k: string]: any;
    }
    /**
     * KeyNameForFileUpload
     */
    export interface IPostFileServiceV3FileGetFileUploadUrlListV3RequestFileList {
      /**
       * 内容类型，即上传文件时的类型。不同type支持的链接见文档：https://yapi.vesync.com/project/536/wiki
       */
      contentType: string;
      /**
       * 文件大小（byte）文件大小限制见文档：https://yapi.vesync.com/project/536/wiki
       */
      contentLengthByte: number;
      /**
       * 文件内容md5，进行完整性校验和文件唯一性判断。
       * md5计算算法为：base64-encoded 128-bit MD5 digest
       * 举例案例见文档：https://wiki.vesync.cn/pages/viewpage.action?pageId=361660752
       */
      md5: string;
      /**
       * 文件名，如：quanah.jpg，不可携带目录
       */
      fileName: string;
      [k: string]: any;
    }

    //#endregion request:4208
    //#append request
  }
  namespace Response {
    //#region response:3153
    /**
     * 响应参数
     */
    export interface IPostFileServiceV2FileDeleteFileListV2Response {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostFileServiceV2FileDeleteFileListV2ResponseResult;
      errorCode: string;
      exception?: IPostFileServiceV2FileDeleteFileListV2ResponseException;
      [k: string]: any;
    }
    /**
     * res
     */
    export interface IPostFileServiceV2FileDeleteFileListV2ResponseResult {
      /**
       * 删除结果
       */
      results: IPostFileServiceV2FileDeleteFileListV2ResponseResultResults[];
      [k: string]: any;
    }
    /**
     * DeleteKeyNameData
     */
    export interface IPostFileServiceV2FileDeleteFileListV2ResponseResultResults {
      /**
       * 是否成功
       */
      success: boolean;
      [k: string]: any;
    }
    export interface IPostFileServiceV2FileDeleteFileListV2ResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostFileServiceV2FileDeleteFileV2Response {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostFileServiceV2FileDeleteFileV2ResponseResult;
      errorCode: string;
      exception?: IPostFileServiceV2FileDeleteFileV2ResponseException;
      [k: string]: any;
    }
    /**
     * res
     */
    export interface IPostFileServiceV2FileDeleteFileV2ResponseResult {
      [k: string]: any;
    }
    export interface IPostFileServiceV2FileDeleteFileV2ResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlListV2Response {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostFileServiceV2FileGetFileUploadUrlListV2ResponseResult;
      errorCode: string;
      exception?: IPostFileServiceV2FileGetFileUploadUrlListV2ResponseException;
      [k: string]: any;
    }
    /**
     * res
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlListV2ResponseResult {
      /**
       * 上传URL
       */
      uploadUrlList: IPostFileServiceV2FileGetFileUploadUrlListV2ResponseResultUploadUrlList[];
      [k: string]: any;
    }
    /**
     * UrlData
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlListV2ResponseResultUploadUrlList {
      /**
       * 上传链接（如果文件已经存在，code=-11606000，这个值会返回为null）
       */
      uploadUrl?: string;
      /**
       * 访问链接
       */
      accessUrl: string;
      /**
       * 状态（等同于返回数据第一层的code）
       */
      code: number;
      /**
       * 备注信息（等同于返回数据第一层的msg）
       */
      msg: string;
      [k: string]: any;
    }
    export interface IPostFileServiceV2FileGetFileUploadUrlListV2ResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlV2Response {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostFileServiceV2FileGetFileUploadUrlV2ResponseResult;
      errorCode: string;
      exception?: IPostFileServiceV2FileGetFileUploadUrlV2ResponseException;
      [k: string]: any;
    }
    /**
     * UrlData
     */
    export interface IPostFileServiceV2FileGetFileUploadUrlV2ResponseResult {
      /**
       * 上传链接（如果文件已经存在，code=-11606000，这个值会返回为null）
       */
      uploadUrl?: string;
      /**
       * 访问链接
       */
      accessUrl: string;
      [k: string]: any;
    }
    export interface IPostFileServiceV2FileGetFileUploadUrlV2ResponseException {
      [k: string]: any;
    }

    //#endregion response:3153
    //#region response:4208
    /**
     * 响应参数
     */
    export interface IPostFileServiceV3FileDeleteFileV3Response {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostFileServiceV3FileDeleteFileV3ResponseResult;
      errorCode: string;
      exception?: IPostFileServiceV3FileDeleteFileV3ResponseException;
      [k: string]: any;
    }
    /**
     * res
     */
    export interface IPostFileServiceV3FileDeleteFileV3ResponseResult {
      [k: string]: any;
    }
    export interface IPostFileServiceV3FileDeleteFileV3ResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostFileServiceV3FileGetFileUploadUrlListV3Response {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostFileServiceV3FileGetFileUploadUrlListV3ResponseResult;
      errorCode: string;
      exception?: IPostFileServiceV3FileGetFileUploadUrlListV3ResponseException;
      [k: string]: any;
    }
    /**
     * res
     */
    export interface IPostFileServiceV3FileGetFileUploadUrlListV3ResponseResult {
      /**
       * 上传URL
       */
      uploadUrlList: IPostFileServiceV3FileGetFileUploadUrlListV3ResponseResultUploadUrlList[];
      [k: string]: any;
    }
    /**
     * UrlData
     */
    export interface IPostFileServiceV3FileGetFileUploadUrlListV3ResponseResultUploadUrlList {
      /**
       * 上传链接（如果文件已经存在，code=-11606000，这个值会返回为null）
       */
      uploadUrl?: string;
      /**
       * 访问链接
       */
      accessUrl: string;
      /**
       * 状态（等同于返回数据第一层的code）
       */
      code: number;
      /**
       * 备注信息（等同于返回数据第一层的msg）
       */
      msg: string;
      [k: string]: any;
    }
    export interface IPostFileServiceV3FileGetFileUploadUrlListV3ResponseException {
      [k: string]: any;
    }

    //#endregion response:4208
    //#append response
  }
}
