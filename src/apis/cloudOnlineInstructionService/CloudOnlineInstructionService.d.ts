/* eslint-disable */
// @ts-ignore
declare namespace CloudOnlineInstructionService {
  namespace Request {
    //#region request:3521
    /**
     * request
     */
    export interface IPostIdataOnlineInstructionV1TextManageGetTextListRequest {
      /**
       * 第几页
       */
      pageNo: number;
      /**
       * 每页大小
       */
      pageSize: number;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * request
     */
    export interface IPostIdataOnlineInstructionV1TextManageImportTextRequest {
      /**
       * 文本json字符串
       */
      text: string;
      /**
       * 手册的id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * request
     */
    export interface IPostIdataOnlineInstructionV1TextManageResetTextRequest {
      /**
       * 文案的id
       */
      textId: number;
      /**
       * 语言种类
       */
      languageType: string;
      /**
       * 0为重置所有文案（此时textId传-1，语言传allLanguage），1为重置某个单元格
       */
      restAllText: number;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * request
     */
    export interface IPostIdataOnlineInstructionV1TextManageUpdateTextRequest {
      /**
       * 文案id
       */
      textId: number;
      /**
       * 语言类别
       */
      languageType: string;
      /**
       * 更新值
       */
      updateValue: string;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    //#endregion request:3521
    //#region request:3523
    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PictureManageDeletePictureRequest {
      /**
       * 图片id
       */
      pictureId: string;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PictureManageGetPictureListRequest {
      /**
       * 手册id
       */
      manualId: number;
      /**
       * 页码
       */
      pageNo: number;
      /**
       * 每页大小
       */
      pageSize: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PictureManageUploadPictureRequest {
      /**
       * 图片url
       */
      pictureUrl: string;
      /**
       * 宽度（px）
       */
      width: number;
      /**
       * 长度（px）
       */
      length: number;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    //#endregion request:3523
    //#region request:3525
    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageAddParentPageRequest {
      /**
       * 页面标题
       */
      pageTitle: string;
      /**
       * 排序字段
       */
      sort: number;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageAddSubPageRequest {
      /**
       * 手册id
       */
      manualId: number;
      /**
       * 父页id
       */
      pageId: number;
      /**
       * 排序字段
       */
      sort: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageDeletePageRequest {
      /**
       * 页面的id
       */
      pageId: number;
      /**
       * 为0时删除父页，1时删除子页
       */
      deletePageType: number;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageExchangePageRequest {
      /**
       * 页面id列表
       */
      orderIdList: number[];
      /**
       * 页面级别（交换子页还是父页）
       */
      pageLevel: number;
      /**
       * 手册id
       */
      manualId: number;
      /**
       * 父页面id，若pageLevel交换子页时必传
       */
      parentPageId?: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetPageOutLineRequest {
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetSubPageInfoRequest {
      /**
       * 子页的id
       */
      pageId: number;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageUpdateParentPageRequest {
      /**
       * 页面标题
       */
      pageTitle: string;
      /**
       * 页面id
       */
      pageId: number;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1PageManageUpdateSubPageRequest {
      subPage: IPostIdataOnlineInstructionV1PageManageUpdateSubPageRequestSubPage;
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }
    /**
     * 子页
     */
    export interface IPostIdataOnlineInstructionV1PageManageUpdateSubPageRequestSubPage {
      /**
       * json
       */
      jsonStr: string;
      /**
       * 页面id
       */
      pageId: number;
      /**
       * 图片url列表
       */
      pictureList: number[];
      /**
       * 文本列表
       */
      textList: number[];
      [k: string]: any;
    }

    //#endregion request:3525
    //#region request:3527
    /**
     * request
     */
    export interface IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualRequest {
      /**
       * 手册描述
       */
      manualDescription: string;
      /**
       * 手册的作者（描述信息）
       */
      manualAuthor: string;
      /**
       * 手册名称
       */
      manualName: string;
      /**
       * 手册id
       */
      manualId?: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1DesignManageDeleteManualRequest {
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1DesignManageExportManualExcelRequest {
      /**
       * 手册id
       */
      manualId: string;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdRequest {
      /**
       * 手册id
       */
      manualId: number;
      [k: string]: any;
    }

    /**
     * req
     */
    export interface IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdRequest {
      [k: string]: any;
    }

    //#endregion request:3527
    //#append request
  }
  namespace Response {
    //#region response:3521
    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1TextManageGetTextListResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1TextManageGetTextListResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1TextManageGetTextListResponseException;
      [k: string]: any;
    }
    /**
     * request
     */
    export interface IPostIdataOnlineInstructionV1TextManageGetTextListResponseResult {
      /**
       * 文案数组
       */
      textList: IPostIdataOnlineInstructionV1TextManageGetTextListResponseResultTextList[];
      /**
       * 总条数
       */
      totalNums: number;
      [k: string]: any;
    }
    /**
     * 每一行的多种语言
     */
    export interface IPostIdataOnlineInstructionV1TextManageGetTextListResponseResultTextList {
      /**
       * 每行的数据
       */
      rowsData: {
        /**
         * 语言类别
         */
        language: string;
        /**
         * 更新值
         */
        updateValue: string;
        /**
         * 原始值
         */
        originalValue: string;
        /**
         * 文案id
         */
        textId: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1TextManageGetTextListResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1TextManageImportTextResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1TextManageImportTextResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1TextManageImportTextResponseException;
      [k: string]: any;
    }
    /**
     * response
     */
    export interface IPostIdataOnlineInstructionV1TextManageImportTextResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1TextManageImportTextResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1TextManageResetTextResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1TextManageResetTextResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1TextManageResetTextResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1TextManageResetTextResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1TextManageResetTextResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1TextManageUpdateTextResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1TextManageUpdateTextResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1TextManageUpdateTextResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1TextManageUpdateTextResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1TextManageUpdateTextResponseException {
      [k: string]: any;
    }

    //#endregion response:3521
    //#region response:3523
    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PictureManageDeletePictureResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PictureManageDeletePictureResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PictureManageDeletePictureResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PictureManageDeletePictureResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PictureManageDeletePictureResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PictureManageGetPictureListResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PictureManageGetPictureListResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PictureManageGetPictureListResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PictureManageGetPictureListResponseResult {
      /**
       * 图片列表
       */
      pictureList: IPostIdataOnlineInstructionV1PictureManageGetPictureListResponseResultPictureList[];
      /**
       * 总条数
       */
      totalNums: number;
      [k: string]: any;
    }
    /**
     * 图片对象
     */
    export interface IPostIdataOnlineInstructionV1PictureManageGetPictureListResponseResultPictureList {
      /**
       * 图片url
       */
      pictureUrl: string;
      /**
       * 长
       */
      length: number;
      /**
       * 宽
       */
      width: number;
      /**
       * 图片id
       */
      id: number;
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PictureManageGetPictureListResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PictureManageUploadPictureResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PictureManageUploadPictureResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PictureManageUploadPictureResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PictureManageUploadPictureResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PictureManageUploadPictureResponseException {
      [k: string]: any;
    }

    //#endregion response:3523
    //#region response:3525
    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageAddParentPageResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageAddParentPageResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageAddParentPageResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PageManageAddParentPageResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageAddParentPageResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageAddSubPageResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageAddSubPageResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageAddSubPageResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PageManageAddSubPageResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageAddSubPageResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageDeletePageResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageDeletePageResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageDeletePageResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PageManageDeletePageResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageDeletePageResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageExchangePageResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageExchangePageResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageExchangePageResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PageManageExchangePageResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageExchangePageResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponseResult {
      /**
       * 页面列表
       */
      pageList: IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponseResultPageList[];
      [k: string]: any;
    }
    /**
     * 父页面
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponseResultPageList {
      /**
       * 页面标题
       */
      pageTitle: string;
      /**
       * 页面id
       */
      pageId: string;
      /**
       * 排序
       */
      sort: string;
      /**
       * 子页列表
       */
      subPageList: {
        /**
         * json
         */
        jsonStr: string;
        /**
         * 页面id
         */
        pageId: number;
        /**
         * 排序
         */
        sort: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageGetPageOutLineResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseException;
      [k: string]: any;
    }
    /**
     * 子页列表
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResult {
      subPage: IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPage;
      [k: string]: any;
    }
    /**
     * 子页
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPage {
      /**
       * json
       */
      jsonStr: string;
      /**
       * 页面id
       */
      pageId: number;
      /**
       * 图片url列表
       */
      pictureList: IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPagePictureList[];
      /**
       * 文本列表
       */
      textList: IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPageTextList[];
      /**
       * 排序
       */
      sort: number;
      [k: string]: any;
    }
    /**
     * 图片对象
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPagePictureList {
      /**
       * 图片url
       */
      pictureUrl: string;
      /**
       * 长
       */
      length: string;
      /**
       * 宽
       */
      wide: string;
      /**
       * 图片id
       */
      pictureId: number;
      [k: string]: any;
    }
    /**
     * 文本（所有语言）
     */
    export interface IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseResultSubPageTextList {
      /**
       * 文案id
       */
      textId: number;
      /**
       * 内容list
       */
      context: {
        /**
         * 文案最新值
         */
        updateValue: string;
        /**
         * 语言种类
         */
        languageType: string;
        /**
         * 原始值
         */
        originalValue: string;
        [k: string]: any;
      }[];
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageGetSubPageInfoResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageUpdateParentPageResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageUpdateParentPageResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageUpdateParentPageResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PageManageUpdateParentPageResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageUpdateParentPageResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1PageManageUpdateSubPageResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1PageManageUpdateSubPageResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1PageManageUpdateSubPageResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1PageManageUpdateSubPageResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1PageManageUpdateSubPageResponseException {
      [k: string]: any;
    }

    //#endregion response:3525
    //#region response:3527
    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualResponseException;
      [k: string]: any;
    }
    /**
     * response
     */
    export interface IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1DesignManageAddOrUpdateManualResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1DesignManageDeleteManualResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1DesignManageDeleteManualResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1DesignManageDeleteManualResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1DesignManageDeleteManualResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1DesignManageDeleteManualResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1DesignManageExportManualExcelResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1DesignManageExportManualExcelResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1DesignManageExportManualExcelResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1DesignManageExportManualExcelResponseResult {
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1DesignManageExportManualExcelResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdResponseResult {
      /**
       * 语言列表
       */
      languageList: string[];
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1DesignManageGetAllLanguageByManualIdResponseException {
      [k: string]: any;
    }

    /**
     * 响应参数
     */
    export interface IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponse {
      traceId: string;
      code: number;
      msg: string;
      module?: string;
      stacktrace?: string;
      result: IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResult;
      errorCode: string;
      exception?: IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseException;
      [k: string]: any;
    }
    /**
     * resp
     */
    export interface IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResult {
      /**
       * list
       */
      manualList: IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResultManualList[];
      [k: string]: any;
    }
    /**
     * object
     */
    export interface IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseResultManualList {
      /**
       * 手册id
       */
      id: number;
      /**
       * 手册名称
       */
      manualName: string;
      /**
       * 手册作者
       */
      authorName: string;
      /**
       * 手册描述
       */
      description: string;
      [k: string]: any;
    }
    export interface IPostIdataOnlineInstructionV1DesignManageGetManualListByUserIdResponseException {
      [k: string]: any;
    }

    //#endregion response:3527
    //#append response
  }
}
