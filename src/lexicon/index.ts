/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type FetchHandler, type FetchHandlerOptions, XrpcClient } from "@atproto/xrpc";
import { CID } from "multiformats/cid";
import { schemas } from "./lexicons";
import * as AppBskyActorDefs from "./types/app/bsky/actor/defs";
import type * as AppBskyActorGetPreferences from "./types/app/bsky/actor/getPreferences";
import type * as AppBskyActorGetProfile from "./types/app/bsky/actor/getProfile";
import type * as AppBskyActorGetProfiles from "./types/app/bsky/actor/getProfiles";
import type * as AppBskyActorGetSuggestions from "./types/app/bsky/actor/getSuggestions";
import type * as AppBskyActorProfile from "./types/app/bsky/actor/profile";
import type * as AppBskyActorPutPreferences from "./types/app/bsky/actor/putPreferences";
import type * as AppBskyActorSearchActors from "./types/app/bsky/actor/searchActors";
import type * as AppBskyActorSearchActorsTypeahead from "./types/app/bsky/actor/searchActorsTypeahead";
import * as AppBskyEmbedDefs from "./types/app/bsky/embed/defs";
import * as AppBskyEmbedExternal from "./types/app/bsky/embed/external";
import * as AppBskyEmbedImages from "./types/app/bsky/embed/images";
import * as AppBskyEmbedRecord from "./types/app/bsky/embed/record";
import * as AppBskyEmbedRecordWithMedia from "./types/app/bsky/embed/recordWithMedia";
import * as AppBskyEmbedVideo from "./types/app/bsky/embed/video";
import * as AppBskyFeedDefs from "./types/app/bsky/feed/defs";
import type * as AppBskyFeedDescribeFeedGenerator from "./types/app/bsky/feed/describeFeedGenerator";
import type * as AppBskyFeedGenerator from "./types/app/bsky/feed/generator";
import type * as AppBskyFeedGetActorFeeds from "./types/app/bsky/feed/getActorFeeds";
import * as AppBskyFeedGetActorLikes from "./types/app/bsky/feed/getActorLikes";
import * as AppBskyFeedGetAuthorFeed from "./types/app/bsky/feed/getAuthorFeed";
import * as AppBskyFeedGetFeed from "./types/app/bsky/feed/getFeed";
import type * as AppBskyFeedGetFeedGenerator from "./types/app/bsky/feed/getFeedGenerator";
import type * as AppBskyFeedGetFeedGenerators from "./types/app/bsky/feed/getFeedGenerators";
import * as AppBskyFeedGetFeedSkeleton from "./types/app/bsky/feed/getFeedSkeleton";
import type * as AppBskyFeedGetLikes from "./types/app/bsky/feed/getLikes";
import * as AppBskyFeedGetListFeed from "./types/app/bsky/feed/getListFeed";
import * as AppBskyFeedGetPostThread from "./types/app/bsky/feed/getPostThread";
import type * as AppBskyFeedGetPosts from "./types/app/bsky/feed/getPosts";
import type * as AppBskyFeedGetQuotes from "./types/app/bsky/feed/getQuotes";
import type * as AppBskyFeedGetRepostedBy from "./types/app/bsky/feed/getRepostedBy";
import type * as AppBskyFeedGetSuggestedFeeds from "./types/app/bsky/feed/getSuggestedFeeds";
import type * as AppBskyFeedGetTimeline from "./types/app/bsky/feed/getTimeline";
import type * as AppBskyFeedLike from "./types/app/bsky/feed/like";
import type * as AppBskyFeedPost from "./types/app/bsky/feed/post";
import type * as AppBskyFeedPostgate from "./types/app/bsky/feed/postgate";
import type * as AppBskyFeedRepost from "./types/app/bsky/feed/repost";
import * as AppBskyFeedSearchPosts from "./types/app/bsky/feed/searchPosts";
import type * as AppBskyFeedSendInteractions from "./types/app/bsky/feed/sendInteractions";
import type * as AppBskyFeedThreadgate from "./types/app/bsky/feed/threadgate";
import type * as AppBskyGraphBlock from "./types/app/bsky/graph/block";
import * as AppBskyGraphDefs from "./types/app/bsky/graph/defs";
import type * as AppBskyGraphFollow from "./types/app/bsky/graph/follow";
import type * as AppBskyGraphGetActorStarterPacks from "./types/app/bsky/graph/getActorStarterPacks";
import type * as AppBskyGraphGetBlocks from "./types/app/bsky/graph/getBlocks";
import type * as AppBskyGraphGetFollowers from "./types/app/bsky/graph/getFollowers";
import type * as AppBskyGraphGetFollows from "./types/app/bsky/graph/getFollows";
import type * as AppBskyGraphGetKnownFollowers from "./types/app/bsky/graph/getKnownFollowers";
import type * as AppBskyGraphGetList from "./types/app/bsky/graph/getList";
import type * as AppBskyGraphGetListBlocks from "./types/app/bsky/graph/getListBlocks";
import type * as AppBskyGraphGetListMutes from "./types/app/bsky/graph/getListMutes";
import type * as AppBskyGraphGetLists from "./types/app/bsky/graph/getLists";
import type * as AppBskyGraphGetMutes from "./types/app/bsky/graph/getMutes";
import * as AppBskyGraphGetRelationships from "./types/app/bsky/graph/getRelationships";
import type * as AppBskyGraphGetStarterPack from "./types/app/bsky/graph/getStarterPack";
import type * as AppBskyGraphGetStarterPacks from "./types/app/bsky/graph/getStarterPacks";
import type * as AppBskyGraphGetSuggestedFollowsByActor from "./types/app/bsky/graph/getSuggestedFollowsByActor";
import type * as AppBskyGraphList from "./types/app/bsky/graph/list";
import type * as AppBskyGraphListblock from "./types/app/bsky/graph/listblock";
import type * as AppBskyGraphListitem from "./types/app/bsky/graph/listitem";
import type * as AppBskyGraphMuteActor from "./types/app/bsky/graph/muteActor";
import type * as AppBskyGraphMuteActorList from "./types/app/bsky/graph/muteActorList";
import type * as AppBskyGraphMuteThread from "./types/app/bsky/graph/muteThread";
import type * as AppBskyGraphSearchStarterPacks from "./types/app/bsky/graph/searchStarterPacks";
import type * as AppBskyGraphStarterpack from "./types/app/bsky/graph/starterpack";
import type * as AppBskyGraphUnmuteActor from "./types/app/bsky/graph/unmuteActor";
import type * as AppBskyGraphUnmuteActorList from "./types/app/bsky/graph/unmuteActorList";
import type * as AppBskyGraphUnmuteThread from "./types/app/bsky/graph/unmuteThread";
import * as AppBskyLabelerDefs from "./types/app/bsky/labeler/defs";
import type * as AppBskyLabelerGetServices from "./types/app/bsky/labeler/getServices";
import type * as AppBskyLabelerService from "./types/app/bsky/labeler/service";
import type * as AppBskyNotificationGetUnreadCount from "./types/app/bsky/notification/getUnreadCount";
import type * as AppBskyNotificationListNotifications from "./types/app/bsky/notification/listNotifications";
import type * as AppBskyNotificationPutPreferences from "./types/app/bsky/notification/putPreferences";
import type * as AppBskyNotificationRegisterPush from "./types/app/bsky/notification/registerPush";
import type * as AppBskyNotificationUpdateSeen from "./types/app/bsky/notification/updateSeen";
import * as AppBskyRichtextFacet from "./types/app/bsky/richtext/facet";
import * as AppBskyUnspeccedDefs from "./types/app/bsky/unspecced/defs";
import type * as AppBskyUnspeccedGetConfig from "./types/app/bsky/unspecced/getConfig";
import type * as AppBskyUnspeccedGetPopularFeedGenerators from "./types/app/bsky/unspecced/getPopularFeedGenerators";
import type * as AppBskyUnspeccedGetSuggestionsSkeleton from "./types/app/bsky/unspecced/getSuggestionsSkeleton";
import type * as AppBskyUnspeccedGetTaggedSuggestions from "./types/app/bsky/unspecced/getTaggedSuggestions";
import * as AppBskyUnspeccedSearchActorsSkeleton from "./types/app/bsky/unspecced/searchActorsSkeleton";
import * as AppBskyUnspeccedSearchPostsSkeleton from "./types/app/bsky/unspecced/searchPostsSkeleton";
import * as AppBskyUnspeccedSearchStarterPacksSkeleton from "./types/app/bsky/unspecced/searchStarterPacksSkeleton";
import * as AppBskyVideoDefs from "./types/app/bsky/video/defs";
import type * as AppBskyVideoGetJobStatus from "./types/app/bsky/video/getJobStatus";
import type * as AppBskyVideoGetUploadLimits from "./types/app/bsky/video/getUploadLimits";
import type * as AppBskyVideoUploadVideo from "./types/app/bsky/video/uploadVideo";
import type * as ChatBskyActorDeclaration from "./types/chat/bsky/actor/declaration";
import * as ChatBskyActorDefs from "./types/chat/bsky/actor/defs";
import type * as ChatBskyActorDeleteAccount from "./types/chat/bsky/actor/deleteAccount";
import type * as ChatBskyActorExportAccountData from "./types/chat/bsky/actor/exportAccountData";
import * as ChatBskyConvoDefs from "./types/chat/bsky/convo/defs";
import type * as ChatBskyConvoDeleteMessageForSelf from "./types/chat/bsky/convo/deleteMessageForSelf";
import type * as ChatBskyConvoGetConvo from "./types/chat/bsky/convo/getConvo";
import type * as ChatBskyConvoGetConvoForMembers from "./types/chat/bsky/convo/getConvoForMembers";
import type * as ChatBskyConvoGetLog from "./types/chat/bsky/convo/getLog";
import type * as ChatBskyConvoGetMessages from "./types/chat/bsky/convo/getMessages";
import type * as ChatBskyConvoLeaveConvo from "./types/chat/bsky/convo/leaveConvo";
import type * as ChatBskyConvoListConvos from "./types/chat/bsky/convo/listConvos";
import type * as ChatBskyConvoMuteConvo from "./types/chat/bsky/convo/muteConvo";
import type * as ChatBskyConvoSendMessage from "./types/chat/bsky/convo/sendMessage";
import type * as ChatBskyConvoSendMessageBatch from "./types/chat/bsky/convo/sendMessageBatch";
import type * as ChatBskyConvoUnmuteConvo from "./types/chat/bsky/convo/unmuteConvo";
import type * as ChatBskyConvoUpdateRead from "./types/chat/bsky/convo/updateRead";
import type * as ChatBskyModerationGetActorMetadata from "./types/chat/bsky/moderation/getActorMetadata";
import type * as ChatBskyModerationGetMessageContext from "./types/chat/bsky/moderation/getMessageContext";
import type * as ChatBskyModerationUpdateActorAccess from "./types/chat/bsky/moderation/updateActorAccess";
import * as ComAtprotoAdminDefs from "./types/com/atproto/admin/defs";
import type * as ComAtprotoAdminDeleteAccount from "./types/com/atproto/admin/deleteAccount";
import type * as ComAtprotoAdminDisableAccountInvites from "./types/com/atproto/admin/disableAccountInvites";
import type * as ComAtprotoAdminDisableInviteCodes from "./types/com/atproto/admin/disableInviteCodes";
import type * as ComAtprotoAdminEnableAccountInvites from "./types/com/atproto/admin/enableAccountInvites";
import type * as ComAtprotoAdminGetAccountInfo from "./types/com/atproto/admin/getAccountInfo";
import type * as ComAtprotoAdminGetAccountInfos from "./types/com/atproto/admin/getAccountInfos";
import type * as ComAtprotoAdminGetInviteCodes from "./types/com/atproto/admin/getInviteCodes";
import type * as ComAtprotoAdminGetSubjectStatus from "./types/com/atproto/admin/getSubjectStatus";
import type * as ComAtprotoAdminSearchAccounts from "./types/com/atproto/admin/searchAccounts";
import type * as ComAtprotoAdminSendEmail from "./types/com/atproto/admin/sendEmail";
import type * as ComAtprotoAdminUpdateAccountEmail from "./types/com/atproto/admin/updateAccountEmail";
import type * as ComAtprotoAdminUpdateAccountHandle from "./types/com/atproto/admin/updateAccountHandle";
import type * as ComAtprotoAdminUpdateAccountPassword from "./types/com/atproto/admin/updateAccountPassword";
import type * as ComAtprotoAdminUpdateSubjectStatus from "./types/com/atproto/admin/updateSubjectStatus";
import type * as ComAtprotoIdentityGetRecommendedDidCredentials from "./types/com/atproto/identity/getRecommendedDidCredentials";
import type * as ComAtprotoIdentityRequestPlcOperationSignature from "./types/com/atproto/identity/requestPlcOperationSignature";
import type * as ComAtprotoIdentityResolveHandle from "./types/com/atproto/identity/resolveHandle";
import type * as ComAtprotoIdentitySignPlcOperation from "./types/com/atproto/identity/signPlcOperation";
import type * as ComAtprotoIdentitySubmitPlcOperation from "./types/com/atproto/identity/submitPlcOperation";
import type * as ComAtprotoIdentityUpdateHandle from "./types/com/atproto/identity/updateHandle";
import * as ComAtprotoLabelDefs from "./types/com/atproto/label/defs";
import type * as ComAtprotoLabelQueryLabels from "./types/com/atproto/label/queryLabels";
import * as ComAtprotoLabelSubscribeLabels from "./types/com/atproto/label/subscribeLabels";
import type * as ComAtprotoModerationCreateReport from "./types/com/atproto/moderation/createReport";
import * as ComAtprotoModerationDefs from "./types/com/atproto/moderation/defs";
import * as ComAtprotoRepoApplyWrites from "./types/com/atproto/repo/applyWrites";
import * as ComAtprotoRepoCreateRecord from "./types/com/atproto/repo/createRecord";
import * as ComAtprotoRepoDefs from "./types/com/atproto/repo/defs";
import * as ComAtprotoRepoDeleteRecord from "./types/com/atproto/repo/deleteRecord";
import type * as ComAtprotoRepoDescribeRepo from "./types/com/atproto/repo/describeRepo";
import * as ComAtprotoRepoGetRecord from "./types/com/atproto/repo/getRecord";
import type * as ComAtprotoRepoImportRepo from "./types/com/atproto/repo/importRepo";
import type * as ComAtprotoRepoListMissingBlobs from "./types/com/atproto/repo/listMissingBlobs";
import type * as ComAtprotoRepoListRecords from "./types/com/atproto/repo/listRecords";
import * as ComAtprotoRepoPutRecord from "./types/com/atproto/repo/putRecord";
import * as ComAtprotoRepoStrongRef from "./types/com/atproto/repo/strongRef";
import type * as ComAtprotoRepoUploadBlob from "./types/com/atproto/repo/uploadBlob";
import type * as ComAtprotoServerActivateAccount from "./types/com/atproto/server/activateAccount";
import type * as ComAtprotoServerCheckAccountStatus from "./types/com/atproto/server/checkAccountStatus";
import * as ComAtprotoServerConfirmEmail from "./types/com/atproto/server/confirmEmail";
import * as ComAtprotoServerCreateAccount from "./types/com/atproto/server/createAccount";
import * as ComAtprotoServerCreateAppPassword from "./types/com/atproto/server/createAppPassword";
import type * as ComAtprotoServerCreateInviteCode from "./types/com/atproto/server/createInviteCode";
import type * as ComAtprotoServerCreateInviteCodes from "./types/com/atproto/server/createInviteCodes";
import * as ComAtprotoServerCreateSession from "./types/com/atproto/server/createSession";
import type * as ComAtprotoServerDeactivateAccount from "./types/com/atproto/server/deactivateAccount";
import * as ComAtprotoServerDefs from "./types/com/atproto/server/defs";
import * as ComAtprotoServerDeleteAccount from "./types/com/atproto/server/deleteAccount";
import type * as ComAtprotoServerDeleteSession from "./types/com/atproto/server/deleteSession";
import type * as ComAtprotoServerDescribeServer from "./types/com/atproto/server/describeServer";
import * as ComAtprotoServerGetAccountInviteCodes from "./types/com/atproto/server/getAccountInviteCodes";
import * as ComAtprotoServerGetServiceAuth from "./types/com/atproto/server/getServiceAuth";
import type * as ComAtprotoServerGetSession from "./types/com/atproto/server/getSession";
import * as ComAtprotoServerListAppPasswords from "./types/com/atproto/server/listAppPasswords";
import * as ComAtprotoServerRefreshSession from "./types/com/atproto/server/refreshSession";
import type * as ComAtprotoServerRequestAccountDelete from "./types/com/atproto/server/requestAccountDelete";
import type * as ComAtprotoServerRequestEmailConfirmation from "./types/com/atproto/server/requestEmailConfirmation";
import type * as ComAtprotoServerRequestEmailUpdate from "./types/com/atproto/server/requestEmailUpdate";
import type * as ComAtprotoServerRequestPasswordReset from "./types/com/atproto/server/requestPasswordReset";
import type * as ComAtprotoServerReserveSigningKey from "./types/com/atproto/server/reserveSigningKey";
import * as ComAtprotoServerResetPassword from "./types/com/atproto/server/resetPassword";
import type * as ComAtprotoServerRevokeAppPassword from "./types/com/atproto/server/revokeAppPassword";
import * as ComAtprotoServerUpdateEmail from "./types/com/atproto/server/updateEmail";
import * as ComAtprotoSyncGetBlob from "./types/com/atproto/sync/getBlob";
import * as ComAtprotoSyncGetBlocks from "./types/com/atproto/sync/getBlocks";
import type * as ComAtprotoSyncGetCheckout from "./types/com/atproto/sync/getCheckout";
import * as ComAtprotoSyncGetHead from "./types/com/atproto/sync/getHead";
import * as ComAtprotoSyncGetLatestCommit from "./types/com/atproto/sync/getLatestCommit";
import * as ComAtprotoSyncGetRecord from "./types/com/atproto/sync/getRecord";
import * as ComAtprotoSyncGetRepo from "./types/com/atproto/sync/getRepo";
import * as ComAtprotoSyncGetRepoStatus from "./types/com/atproto/sync/getRepoStatus";
import * as ComAtprotoSyncListBlobs from "./types/com/atproto/sync/listBlobs";
import type * as ComAtprotoSyncListRepos from "./types/com/atproto/sync/listRepos";
import type * as ComAtprotoSyncNotifyOfUpdate from "./types/com/atproto/sync/notifyOfUpdate";
import type * as ComAtprotoSyncRequestCrawl from "./types/com/atproto/sync/requestCrawl";
import * as ComAtprotoSyncSubscribeRepos from "./types/com/atproto/sync/subscribeRepos";
import type * as ComAtprotoTempCheckSignupQueue from "./types/com/atproto/temp/checkSignupQueue";
import type * as ComAtprotoTempFetchLabels from "./types/com/atproto/temp/fetchLabels";
import type * as ComAtprotoTempRequestPhoneVerification from "./types/com/atproto/temp/requestPhoneVerification";
import * as ToolsOzoneCommunicationCreateTemplate from "./types/tools/ozone/communication/createTemplate";
import * as ToolsOzoneCommunicationDefs from "./types/tools/ozone/communication/defs";
import type * as ToolsOzoneCommunicationDeleteTemplate from "./types/tools/ozone/communication/deleteTemplate";
import type * as ToolsOzoneCommunicationListTemplates from "./types/tools/ozone/communication/listTemplates";
import * as ToolsOzoneCommunicationUpdateTemplate from "./types/tools/ozone/communication/updateTemplate";
import * as ToolsOzoneModerationDefs from "./types/tools/ozone/moderation/defs";
import * as ToolsOzoneModerationEmitEvent from "./types/tools/ozone/moderation/emitEvent";
import type * as ToolsOzoneModerationGetEvent from "./types/tools/ozone/moderation/getEvent";
import * as ToolsOzoneModerationGetRecord from "./types/tools/ozone/moderation/getRecord";
import type * as ToolsOzoneModerationGetRecords from "./types/tools/ozone/moderation/getRecords";
import * as ToolsOzoneModerationGetRepo from "./types/tools/ozone/moderation/getRepo";
import type * as ToolsOzoneModerationGetRepos from "./types/tools/ozone/moderation/getRepos";
import type * as ToolsOzoneModerationQueryEvents from "./types/tools/ozone/moderation/queryEvents";
import type * as ToolsOzoneModerationQueryStatuses from "./types/tools/ozone/moderation/queryStatuses";
import type * as ToolsOzoneModerationSearchRepos from "./types/tools/ozone/moderation/searchRepos";
import type * as ToolsOzoneServerGetConfig from "./types/tools/ozone/server/getConfig";
import type * as ToolsOzoneSetAddValues from "./types/tools/ozone/set/addValues";
import * as ToolsOzoneSetDefs from "./types/tools/ozone/set/defs";
import * as ToolsOzoneSetDeleteSet from "./types/tools/ozone/set/deleteSet";
import * as ToolsOzoneSetDeleteValues from "./types/tools/ozone/set/deleteValues";
import * as ToolsOzoneSetGetValues from "./types/tools/ozone/set/getValues";
import type * as ToolsOzoneSetQuerySets from "./types/tools/ozone/set/querySets";
import type * as ToolsOzoneSetUpsertSet from "./types/tools/ozone/set/upsertSet";
import * as ToolsOzoneSettingDefs from "./types/tools/ozone/setting/defs";
import type * as ToolsOzoneSettingListOptions from "./types/tools/ozone/setting/listOptions";
import type * as ToolsOzoneSettingRemoveOptions from "./types/tools/ozone/setting/removeOptions";
import type * as ToolsOzoneSettingUpsertOption from "./types/tools/ozone/setting/upsertOption";
import * as ToolsOzoneSignatureDefs from "./types/tools/ozone/signature/defs";
import type * as ToolsOzoneSignatureFindCorrelation from "./types/tools/ozone/signature/findCorrelation";
import type * as ToolsOzoneSignatureFindRelatedAccounts from "./types/tools/ozone/signature/findRelatedAccounts";
import type * as ToolsOzoneSignatureSearchAccounts from "./types/tools/ozone/signature/searchAccounts";
import * as ToolsOzoneTeamAddMember from "./types/tools/ozone/team/addMember";
import * as ToolsOzoneTeamDefs from "./types/tools/ozone/team/defs";
import * as ToolsOzoneTeamDeleteMember from "./types/tools/ozone/team/deleteMember";
import type * as ToolsOzoneTeamListMembers from "./types/tools/ozone/team/listMembers";
import * as ToolsOzoneTeamUpdateMember from "./types/tools/ozone/team/updateMember";

export * as ToolsOzoneTeamUpdateMember from "./types/tools/ozone/team/updateMember";
export * as ToolsOzoneTeamListMembers from "./types/tools/ozone/team/listMembers";
export * as ToolsOzoneTeamDeleteMember from "./types/tools/ozone/team/deleteMember";
export * as ToolsOzoneTeamDefs from "./types/tools/ozone/team/defs";
export * as ToolsOzoneTeamAddMember from "./types/tools/ozone/team/addMember";
export * as ToolsOzoneSettingUpsertOption from "./types/tools/ozone/setting/upsertOption";
export * as ToolsOzoneSettingRemoveOptions from "./types/tools/ozone/setting/removeOptions";
export * as ToolsOzoneSettingListOptions from "./types/tools/ozone/setting/listOptions";
export * as ToolsOzoneSettingDefs from "./types/tools/ozone/setting/defs";
export * as ToolsOzoneSignatureSearchAccounts from "./types/tools/ozone/signature/searchAccounts";
export * as ToolsOzoneSignatureFindRelatedAccounts from "./types/tools/ozone/signature/findRelatedAccounts";
export * as ToolsOzoneSignatureFindCorrelation from "./types/tools/ozone/signature/findCorrelation";
export * as ToolsOzoneSignatureDefs from "./types/tools/ozone/signature/defs";
export * as ToolsOzoneSetUpsertSet from "./types/tools/ozone/set/upsertSet";
export * as ToolsOzoneSetQuerySets from "./types/tools/ozone/set/querySets";
export * as ToolsOzoneSetGetValues from "./types/tools/ozone/set/getValues";
export * as ToolsOzoneSetDeleteValues from "./types/tools/ozone/set/deleteValues";
export * as ToolsOzoneSetDeleteSet from "./types/tools/ozone/set/deleteSet";
export * as ToolsOzoneSetDefs from "./types/tools/ozone/set/defs";
export * as ToolsOzoneSetAddValues from "./types/tools/ozone/set/addValues";
export * as ToolsOzoneServerGetConfig from "./types/tools/ozone/server/getConfig";
export * as ToolsOzoneModerationSearchRepos from "./types/tools/ozone/moderation/searchRepos";
export * as ToolsOzoneModerationQueryStatuses from "./types/tools/ozone/moderation/queryStatuses";
export * as ToolsOzoneModerationQueryEvents from "./types/tools/ozone/moderation/queryEvents";
export * as ToolsOzoneModerationGetRepos from "./types/tools/ozone/moderation/getRepos";
export * as ToolsOzoneModerationGetRepo from "./types/tools/ozone/moderation/getRepo";
export * as ToolsOzoneModerationGetRecords from "./types/tools/ozone/moderation/getRecords";
export * as ToolsOzoneModerationGetRecord from "./types/tools/ozone/moderation/getRecord";
export * as ToolsOzoneModerationGetEvent from "./types/tools/ozone/moderation/getEvent";
export * as ToolsOzoneModerationEmitEvent from "./types/tools/ozone/moderation/emitEvent";
export * as ToolsOzoneModerationDefs from "./types/tools/ozone/moderation/defs";
export * as ToolsOzoneCommunicationUpdateTemplate from "./types/tools/ozone/communication/updateTemplate";
export * as ToolsOzoneCommunicationListTemplates from "./types/tools/ozone/communication/listTemplates";
export * as ToolsOzoneCommunicationDeleteTemplate from "./types/tools/ozone/communication/deleteTemplate";
export * as ToolsOzoneCommunicationDefs from "./types/tools/ozone/communication/defs";
export * as ToolsOzoneCommunicationCreateTemplate from "./types/tools/ozone/communication/createTemplate";
export * as ComAtprotoTempRequestPhoneVerification from "./types/com/atproto/temp/requestPhoneVerification";
export * as ComAtprotoTempFetchLabels from "./types/com/atproto/temp/fetchLabels";
export * as ComAtprotoTempCheckSignupQueue from "./types/com/atproto/temp/checkSignupQueue";
export * as ComAtprotoSyncSubscribeRepos from "./types/com/atproto/sync/subscribeRepos";
export * as ComAtprotoSyncRequestCrawl from "./types/com/atproto/sync/requestCrawl";
export * as ComAtprotoSyncNotifyOfUpdate from "./types/com/atproto/sync/notifyOfUpdate";
export * as ComAtprotoSyncListRepos from "./types/com/atproto/sync/listRepos";
export * as ComAtprotoSyncListBlobs from "./types/com/atproto/sync/listBlobs";
export * as ComAtprotoSyncGetRepoStatus from "./types/com/atproto/sync/getRepoStatus";
export * as ComAtprotoSyncGetRepo from "./types/com/atproto/sync/getRepo";
export * as ComAtprotoSyncGetRecord from "./types/com/atproto/sync/getRecord";
export * as ComAtprotoSyncGetLatestCommit from "./types/com/atproto/sync/getLatestCommit";
export * as ComAtprotoSyncGetHead from "./types/com/atproto/sync/getHead";
export * as ComAtprotoSyncGetCheckout from "./types/com/atproto/sync/getCheckout";
export * as ComAtprotoSyncGetBlocks from "./types/com/atproto/sync/getBlocks";
export * as ComAtprotoSyncGetBlob from "./types/com/atproto/sync/getBlob";
export * as ComAtprotoServerUpdateEmail from "./types/com/atproto/server/updateEmail";
export * as ComAtprotoServerRevokeAppPassword from "./types/com/atproto/server/revokeAppPassword";
export * as ComAtprotoServerResetPassword from "./types/com/atproto/server/resetPassword";
export * as ComAtprotoServerReserveSigningKey from "./types/com/atproto/server/reserveSigningKey";
export * as ComAtprotoServerRequestPasswordReset from "./types/com/atproto/server/requestPasswordReset";
export * as ComAtprotoServerRequestEmailUpdate from "./types/com/atproto/server/requestEmailUpdate";
export * as ComAtprotoServerRequestEmailConfirmation from "./types/com/atproto/server/requestEmailConfirmation";
export * as ComAtprotoServerRequestAccountDelete from "./types/com/atproto/server/requestAccountDelete";
export * as ComAtprotoServerRefreshSession from "./types/com/atproto/server/refreshSession";
export * as ComAtprotoServerListAppPasswords from "./types/com/atproto/server/listAppPasswords";
export * as ComAtprotoServerGetSession from "./types/com/atproto/server/getSession";
export * as ComAtprotoServerGetServiceAuth from "./types/com/atproto/server/getServiceAuth";
export * as ComAtprotoServerGetAccountInviteCodes from "./types/com/atproto/server/getAccountInviteCodes";
export * as ComAtprotoServerDescribeServer from "./types/com/atproto/server/describeServer";
export * as ComAtprotoServerDeleteSession from "./types/com/atproto/server/deleteSession";
export * as ComAtprotoServerDeleteAccount from "./types/com/atproto/server/deleteAccount";
export * as ComAtprotoServerDefs from "./types/com/atproto/server/defs";
export * as ComAtprotoServerDeactivateAccount from "./types/com/atproto/server/deactivateAccount";
export * as ComAtprotoServerCreateSession from "./types/com/atproto/server/createSession";
export * as ComAtprotoServerCreateInviteCodes from "./types/com/atproto/server/createInviteCodes";
export * as ComAtprotoServerCreateInviteCode from "./types/com/atproto/server/createInviteCode";
export * as ComAtprotoServerCreateAppPassword from "./types/com/atproto/server/createAppPassword";
export * as ComAtprotoServerCreateAccount from "./types/com/atproto/server/createAccount";
export * as ComAtprotoServerConfirmEmail from "./types/com/atproto/server/confirmEmail";
export * as ComAtprotoServerCheckAccountStatus from "./types/com/atproto/server/checkAccountStatus";
export * as ComAtprotoServerActivateAccount from "./types/com/atproto/server/activateAccount";
export * as ComAtprotoRepoUploadBlob from "./types/com/atproto/repo/uploadBlob";
export * as ComAtprotoRepoStrongRef from "./types/com/atproto/repo/strongRef";
export * as ComAtprotoRepoPutRecord from "./types/com/atproto/repo/putRecord";
export * as ComAtprotoRepoListRecords from "./types/com/atproto/repo/listRecords";
export * as ComAtprotoRepoListMissingBlobs from "./types/com/atproto/repo/listMissingBlobs";
export * as ComAtprotoRepoImportRepo from "./types/com/atproto/repo/importRepo";
export * as ComAtprotoRepoGetRecord from "./types/com/atproto/repo/getRecord";
export * as ComAtprotoRepoDescribeRepo from "./types/com/atproto/repo/describeRepo";
export * as ComAtprotoRepoDeleteRecord from "./types/com/atproto/repo/deleteRecord";
export * as ComAtprotoRepoDefs from "./types/com/atproto/repo/defs";
export * as ComAtprotoRepoCreateRecord from "./types/com/atproto/repo/createRecord";
export * as ComAtprotoRepoApplyWrites from "./types/com/atproto/repo/applyWrites";
export * as ComAtprotoModerationDefs from "./types/com/atproto/moderation/defs";
export * as ComAtprotoModerationCreateReport from "./types/com/atproto/moderation/createReport";
export * as ComAtprotoLabelSubscribeLabels from "./types/com/atproto/label/subscribeLabels";
export * as ComAtprotoLabelQueryLabels from "./types/com/atproto/label/queryLabels";
export * as ComAtprotoLabelDefs from "./types/com/atproto/label/defs";
export * as ComAtprotoIdentityUpdateHandle from "./types/com/atproto/identity/updateHandle";
export * as ComAtprotoIdentitySubmitPlcOperation from "./types/com/atproto/identity/submitPlcOperation";
export * as ComAtprotoIdentitySignPlcOperation from "./types/com/atproto/identity/signPlcOperation";
export * as ComAtprotoIdentityResolveHandle from "./types/com/atproto/identity/resolveHandle";
export * as ComAtprotoIdentityRequestPlcOperationSignature from "./types/com/atproto/identity/requestPlcOperationSignature";
export * as ComAtprotoIdentityGetRecommendedDidCredentials from "./types/com/atproto/identity/getRecommendedDidCredentials";
export * as ComAtprotoAdminUpdateSubjectStatus from "./types/com/atproto/admin/updateSubjectStatus";
export * as ComAtprotoAdminUpdateAccountPassword from "./types/com/atproto/admin/updateAccountPassword";
export * as ComAtprotoAdminUpdateAccountHandle from "./types/com/atproto/admin/updateAccountHandle";
export * as ComAtprotoAdminUpdateAccountEmail from "./types/com/atproto/admin/updateAccountEmail";
export * as ComAtprotoAdminSendEmail from "./types/com/atproto/admin/sendEmail";
export * as ComAtprotoAdminSearchAccounts from "./types/com/atproto/admin/searchAccounts";
export * as ComAtprotoAdminGetSubjectStatus from "./types/com/atproto/admin/getSubjectStatus";
export * as ComAtprotoAdminGetInviteCodes from "./types/com/atproto/admin/getInviteCodes";
export * as ComAtprotoAdminGetAccountInfos from "./types/com/atproto/admin/getAccountInfos";
export * as ComAtprotoAdminGetAccountInfo from "./types/com/atproto/admin/getAccountInfo";
export * as ComAtprotoAdminEnableAccountInvites from "./types/com/atproto/admin/enableAccountInvites";
export * as ComAtprotoAdminDisableInviteCodes from "./types/com/atproto/admin/disableInviteCodes";
export * as ComAtprotoAdminDisableAccountInvites from "./types/com/atproto/admin/disableAccountInvites";
export * as ComAtprotoAdminDeleteAccount from "./types/com/atproto/admin/deleteAccount";
export * as ComAtprotoAdminDefs from "./types/com/atproto/admin/defs";
export * as ChatBskyConvoUpdateRead from "./types/chat/bsky/convo/updateRead";
export * as ChatBskyConvoUnmuteConvo from "./types/chat/bsky/convo/unmuteConvo";
export * as ChatBskyConvoSendMessageBatch from "./types/chat/bsky/convo/sendMessageBatch";
export * as ChatBskyConvoSendMessage from "./types/chat/bsky/convo/sendMessage";
export * as ChatBskyConvoMuteConvo from "./types/chat/bsky/convo/muteConvo";
export * as ChatBskyConvoListConvos from "./types/chat/bsky/convo/listConvos";
export * as ChatBskyConvoLeaveConvo from "./types/chat/bsky/convo/leaveConvo";
export * as ChatBskyConvoGetMessages from "./types/chat/bsky/convo/getMessages";
export * as ChatBskyConvoGetLog from "./types/chat/bsky/convo/getLog";
export * as ChatBskyConvoGetConvoForMembers from "./types/chat/bsky/convo/getConvoForMembers";
export * as ChatBskyConvoGetConvo from "./types/chat/bsky/convo/getConvo";
export * as ChatBskyConvoDeleteMessageForSelf from "./types/chat/bsky/convo/deleteMessageForSelf";
export * as ChatBskyConvoDefs from "./types/chat/bsky/convo/defs";
export * as ChatBskyActorExportAccountData from "./types/chat/bsky/actor/exportAccountData";
export * as ChatBskyActorDeleteAccount from "./types/chat/bsky/actor/deleteAccount";
export * as ChatBskyActorDefs from "./types/chat/bsky/actor/defs";
export * as ChatBskyActorDeclaration from "./types/chat/bsky/actor/declaration";
export * as ChatBskyModerationUpdateActorAccess from "./types/chat/bsky/moderation/updateActorAccess";
export * as ChatBskyModerationGetMessageContext from "./types/chat/bsky/moderation/getMessageContext";
export * as ChatBskyModerationGetActorMetadata from "./types/chat/bsky/moderation/getActorMetadata";
export * as AppBskyVideoUploadVideo from "./types/app/bsky/video/uploadVideo";
export * as AppBskyVideoGetUploadLimits from "./types/app/bsky/video/getUploadLimits";
export * as AppBskyVideoGetJobStatus from "./types/app/bsky/video/getJobStatus";
export * as AppBskyVideoDefs from "./types/app/bsky/video/defs";
export * as AppBskyRichtextFacet from "./types/app/bsky/richtext/facet";
export * as AppBskyUnspeccedSearchStarterPacksSkeleton from "./types/app/bsky/unspecced/searchStarterPacksSkeleton";
export * as AppBskyUnspeccedSearchPostsSkeleton from "./types/app/bsky/unspecced/searchPostsSkeleton";
export * as AppBskyUnspeccedSearchActorsSkeleton from "./types/app/bsky/unspecced/searchActorsSkeleton";
export * as AppBskyUnspeccedGetTaggedSuggestions from "./types/app/bsky/unspecced/getTaggedSuggestions";
export * as AppBskyUnspeccedGetSuggestionsSkeleton from "./types/app/bsky/unspecced/getSuggestionsSkeleton";
export * as AppBskyUnspeccedGetPopularFeedGenerators from "./types/app/bsky/unspecced/getPopularFeedGenerators";
export * as AppBskyUnspeccedGetConfig from "./types/app/bsky/unspecced/getConfig";
export * as AppBskyUnspeccedDefs from "./types/app/bsky/unspecced/defs";
export * as AppBskyLabelerService from "./types/app/bsky/labeler/service";
export * as AppBskyLabelerGetServices from "./types/app/bsky/labeler/getServices";
export * as AppBskyLabelerDefs from "./types/app/bsky/labeler/defs";
export * as AppBskyGraphUnmuteThread from "./types/app/bsky/graph/unmuteThread";
export * as AppBskyGraphUnmuteActorList from "./types/app/bsky/graph/unmuteActorList";
export * as AppBskyGraphUnmuteActor from "./types/app/bsky/graph/unmuteActor";
export * as AppBskyGraphStarterpack from "./types/app/bsky/graph/starterpack";
export * as AppBskyGraphSearchStarterPacks from "./types/app/bsky/graph/searchStarterPacks";
export * as AppBskyGraphMuteThread from "./types/app/bsky/graph/muteThread";
export * as AppBskyGraphMuteActorList from "./types/app/bsky/graph/muteActorList";
export * as AppBskyGraphMuteActor from "./types/app/bsky/graph/muteActor";
export * as AppBskyGraphListitem from "./types/app/bsky/graph/listitem";
export * as AppBskyGraphListblock from "./types/app/bsky/graph/listblock";
export * as AppBskyGraphList from "./types/app/bsky/graph/list";
export * as AppBskyGraphGetSuggestedFollowsByActor from "./types/app/bsky/graph/getSuggestedFollowsByActor";
export * as AppBskyGraphGetStarterPacks from "./types/app/bsky/graph/getStarterPacks";
export * as AppBskyGraphGetStarterPack from "./types/app/bsky/graph/getStarterPack";
export * as AppBskyGraphGetRelationships from "./types/app/bsky/graph/getRelationships";
export * as AppBskyGraphGetMutes from "./types/app/bsky/graph/getMutes";
export * as AppBskyGraphGetLists from "./types/app/bsky/graph/getLists";
export * as AppBskyGraphGetListMutes from "./types/app/bsky/graph/getListMutes";
export * as AppBskyGraphGetListBlocks from "./types/app/bsky/graph/getListBlocks";
export * as AppBskyGraphGetList from "./types/app/bsky/graph/getList";
export * as AppBskyGraphGetKnownFollowers from "./types/app/bsky/graph/getKnownFollowers";
export * as AppBskyGraphGetFollows from "./types/app/bsky/graph/getFollows";
export * as AppBskyGraphGetFollowers from "./types/app/bsky/graph/getFollowers";
export * as AppBskyGraphGetBlocks from "./types/app/bsky/graph/getBlocks";
export * as AppBskyGraphGetActorStarterPacks from "./types/app/bsky/graph/getActorStarterPacks";
export * as AppBskyGraphFollow from "./types/app/bsky/graph/follow";
export * as AppBskyGraphDefs from "./types/app/bsky/graph/defs";
export * as AppBskyGraphBlock from "./types/app/bsky/graph/block";
export * as AppBskyFeedThreadgate from "./types/app/bsky/feed/threadgate";
export * as AppBskyFeedSendInteractions from "./types/app/bsky/feed/sendInteractions";
export * as AppBskyFeedSearchPosts from "./types/app/bsky/feed/searchPosts";
export * as AppBskyFeedRepost from "./types/app/bsky/feed/repost";
export * as AppBskyFeedPostgate from "./types/app/bsky/feed/postgate";
export * as AppBskyFeedPost from "./types/app/bsky/feed/post";
export * as AppBskyFeedLike from "./types/app/bsky/feed/like";
export * as AppBskyFeedGetTimeline from "./types/app/bsky/feed/getTimeline";
export * as AppBskyFeedGetSuggestedFeeds from "./types/app/bsky/feed/getSuggestedFeeds";
export * as AppBskyFeedGetRepostedBy from "./types/app/bsky/feed/getRepostedBy";
export * as AppBskyFeedGetQuotes from "./types/app/bsky/feed/getQuotes";
export * as AppBskyFeedGetPosts from "./types/app/bsky/feed/getPosts";
export * as AppBskyFeedGetPostThread from "./types/app/bsky/feed/getPostThread";
export * as AppBskyFeedGetListFeed from "./types/app/bsky/feed/getListFeed";
export * as AppBskyFeedGetLikes from "./types/app/bsky/feed/getLikes";
export * as AppBskyFeedGetFeedSkeleton from "./types/app/bsky/feed/getFeedSkeleton";
export * as AppBskyFeedGetFeedGenerators from "./types/app/bsky/feed/getFeedGenerators";
export * as AppBskyFeedGetFeedGenerator from "./types/app/bsky/feed/getFeedGenerator";
export * as AppBskyFeedGetFeed from "./types/app/bsky/feed/getFeed";
export * as AppBskyFeedGetAuthorFeed from "./types/app/bsky/feed/getAuthorFeed";
export * as AppBskyFeedGetActorLikes from "./types/app/bsky/feed/getActorLikes";
export * as AppBskyFeedGetActorFeeds from "./types/app/bsky/feed/getActorFeeds";
export * as AppBskyFeedGenerator from "./types/app/bsky/feed/generator";
export * as AppBskyFeedDescribeFeedGenerator from "./types/app/bsky/feed/describeFeedGenerator";
export * as AppBskyFeedDefs from "./types/app/bsky/feed/defs";
export * as AppBskyEmbedVideo from "./types/app/bsky/embed/video";
export * as AppBskyEmbedRecordWithMedia from "./types/app/bsky/embed/recordWithMedia";
export * as AppBskyEmbedRecord from "./types/app/bsky/embed/record";
export * as AppBskyEmbedImages from "./types/app/bsky/embed/images";
export * as AppBskyEmbedExternal from "./types/app/bsky/embed/external";
export * as AppBskyEmbedDefs from "./types/app/bsky/embed/defs";
export * as AppBskyActorSearchActorsTypeahead from "./types/app/bsky/actor/searchActorsTypeahead";
export * as AppBskyActorSearchActors from "./types/app/bsky/actor/searchActors";
export * as AppBskyActorPutPreferences from "./types/app/bsky/actor/putPreferences";
export * as AppBskyActorProfile from "./types/app/bsky/actor/profile";
export * as AppBskyActorGetSuggestions from "./types/app/bsky/actor/getSuggestions";
export * as AppBskyActorGetProfiles from "./types/app/bsky/actor/getProfiles";
export * as AppBskyActorGetProfile from "./types/app/bsky/actor/getProfile";
export * as AppBskyActorGetPreferences from "./types/app/bsky/actor/getPreferences";
export * as AppBskyActorDefs from "./types/app/bsky/actor/defs";
export * as AppBskyNotificationUpdateSeen from "./types/app/bsky/notification/updateSeen";
export * as AppBskyNotificationRegisterPush from "./types/app/bsky/notification/registerPush";
export * as AppBskyNotificationPutPreferences from "./types/app/bsky/notification/putPreferences";
export * as AppBskyNotificationListNotifications from "./types/app/bsky/notification/listNotifications";
export * as AppBskyNotificationGetUnreadCount from "./types/app/bsky/notification/getUnreadCount";

export const TOOLS_OZONE_TEAM = {
    DefsRoleAdmin: "tools.ozone.team.defs#roleAdmin",
    DefsRoleModerator: "tools.ozone.team.defs#roleModerator",
    DefsRoleTriage: "tools.ozone.team.defs#roleTriage",
};
export const TOOLS_OZONE_MODERATION = {
    DefsReviewOpen: "tools.ozone.moderation.defs#reviewOpen",
    DefsReviewEscalated: "tools.ozone.moderation.defs#reviewEscalated",
    DefsReviewClosed: "tools.ozone.moderation.defs#reviewClosed",
    DefsReviewNone: "tools.ozone.moderation.defs#reviewNone",
};
export const COM_ATPROTO_MODERATION = {
    DefsReasonSpam: "com.atproto.moderation.defs#reasonSpam",
    DefsReasonViolation: "com.atproto.moderation.defs#reasonViolation",
    DefsReasonMisleading: "com.atproto.moderation.defs#reasonMisleading",
    DefsReasonSexual: "com.atproto.moderation.defs#reasonSexual",
    DefsReasonRude: "com.atproto.moderation.defs#reasonRude",
    DefsReasonOther: "com.atproto.moderation.defs#reasonOther",
    DefsReasonAppeal: "com.atproto.moderation.defs#reasonAppeal",
};
export const APP_BSKY_GRAPH = {
    DefsModlist: "app.bsky.graph.defs#modlist",
    DefsCuratelist: "app.bsky.graph.defs#curatelist",
    DefsReferencelist: "app.bsky.graph.defs#referencelist",
};
export const APP_BSKY_FEED = {
    DefsRequestLess: "app.bsky.feed.defs#requestLess",
    DefsRequestMore: "app.bsky.feed.defs#requestMore",
    DefsClickthroughItem: "app.bsky.feed.defs#clickthroughItem",
    DefsClickthroughAuthor: "app.bsky.feed.defs#clickthroughAuthor",
    DefsClickthroughReposter: "app.bsky.feed.defs#clickthroughReposter",
    DefsClickthroughEmbed: "app.bsky.feed.defs#clickthroughEmbed",
    DefsInteractionSeen: "app.bsky.feed.defs#interactionSeen",
    DefsInteractionLike: "app.bsky.feed.defs#interactionLike",
    DefsInteractionRepost: "app.bsky.feed.defs#interactionRepost",
    DefsInteractionReply: "app.bsky.feed.defs#interactionReply",
    DefsInteractionQuote: "app.bsky.feed.defs#interactionQuote",
    DefsInteractionShare: "app.bsky.feed.defs#interactionShare",
};

export class AtpBaseClient extends XrpcClient {
    tools: ToolsNS;
    com: ComNS;
    chat: ChatNS;
    app: AppNS;

    constructor(options: FetchHandler | FetchHandlerOptions) {
        super(options, schemas);
        this.tools = new ToolsNS(this);
        this.com = new ComNS(this);
        this.chat = new ChatNS(this);
        this.app = new AppNS(this);
    }

    /** @deprecated use `this` instead */
    get xrpc(): XrpcClient {
        return this;
    }
}

export class ToolsNS {
    _client: XrpcClient;
    ozone: ToolsOzoneNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.ozone = new ToolsOzoneNS(client);
    }
}

export class ToolsOzoneNS {
    _client: XrpcClient;
    team: ToolsOzoneTeamNS;
    setting: ToolsOzoneSettingNS;
    signature: ToolsOzoneSignatureNS;
    set: ToolsOzoneSetNS;
    server: ToolsOzoneServerNS;
    moderation: ToolsOzoneModerationNS;
    communication: ToolsOzoneCommunicationNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.team = new ToolsOzoneTeamNS(client);
        this.setting = new ToolsOzoneSettingNS(client);
        this.signature = new ToolsOzoneSignatureNS(client);
        this.set = new ToolsOzoneSetNS(client);
        this.server = new ToolsOzoneServerNS(client);
        this.moderation = new ToolsOzoneModerationNS(client);
        this.communication = new ToolsOzoneCommunicationNS(client);
    }
}

export class ToolsOzoneTeamNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateMember(
        data?: ToolsOzoneTeamUpdateMember.InputSchema,
        opts?: ToolsOzoneTeamUpdateMember.CallOptions,
    ): Promise<ToolsOzoneTeamUpdateMember.Response> {
        return this._client
            .call("tools.ozone.team.updateMember", opts?.qp, data, opts)
            .catch((e) => {
                throw ToolsOzoneTeamUpdateMember.toKnownErr(e);
            });
    }

    listMembers(
        params?: ToolsOzoneTeamListMembers.QueryParams,
        opts?: ToolsOzoneTeamListMembers.CallOptions,
    ): Promise<ToolsOzoneTeamListMembers.Response> {
        return this._client.call("tools.ozone.team.listMembers", params, undefined, opts);
    }

    deleteMember(
        data?: ToolsOzoneTeamDeleteMember.InputSchema,
        opts?: ToolsOzoneTeamDeleteMember.CallOptions,
    ): Promise<ToolsOzoneTeamDeleteMember.Response> {
        return this._client
            .call("tools.ozone.team.deleteMember", opts?.qp, data, opts)
            .catch((e) => {
                throw ToolsOzoneTeamDeleteMember.toKnownErr(e);
            });
    }

    addMember(
        data?: ToolsOzoneTeamAddMember.InputSchema,
        opts?: ToolsOzoneTeamAddMember.CallOptions,
    ): Promise<ToolsOzoneTeamAddMember.Response> {
        return this._client.call("tools.ozone.team.addMember", opts?.qp, data, opts).catch((e) => {
            throw ToolsOzoneTeamAddMember.toKnownErr(e);
        });
    }
}

export class ToolsOzoneSettingNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    upsertOption(
        data?: ToolsOzoneSettingUpsertOption.InputSchema,
        opts?: ToolsOzoneSettingUpsertOption.CallOptions,
    ): Promise<ToolsOzoneSettingUpsertOption.Response> {
        return this._client.call("tools.ozone.setting.upsertOption", opts?.qp, data, opts);
    }

    removeOptions(
        data?: ToolsOzoneSettingRemoveOptions.InputSchema,
        opts?: ToolsOzoneSettingRemoveOptions.CallOptions,
    ): Promise<ToolsOzoneSettingRemoveOptions.Response> {
        return this._client.call("tools.ozone.setting.removeOptions", opts?.qp, data, opts);
    }

    listOptions(
        params?: ToolsOzoneSettingListOptions.QueryParams,
        opts?: ToolsOzoneSettingListOptions.CallOptions,
    ): Promise<ToolsOzoneSettingListOptions.Response> {
        return this._client.call("tools.ozone.setting.listOptions", params, undefined, opts);
    }
}

export class ToolsOzoneSignatureNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    searchAccounts(
        params?: ToolsOzoneSignatureSearchAccounts.QueryParams,
        opts?: ToolsOzoneSignatureSearchAccounts.CallOptions,
    ): Promise<ToolsOzoneSignatureSearchAccounts.Response> {
        return this._client.call("tools.ozone.signature.searchAccounts", params, undefined, opts);
    }

    findRelatedAccounts(
        params?: ToolsOzoneSignatureFindRelatedAccounts.QueryParams,
        opts?: ToolsOzoneSignatureFindRelatedAccounts.CallOptions,
    ): Promise<ToolsOzoneSignatureFindRelatedAccounts.Response> {
        return this._client.call(
            "tools.ozone.signature.findRelatedAccounts",
            params,
            undefined,
            opts,
        );
    }

    findCorrelation(
        params?: ToolsOzoneSignatureFindCorrelation.QueryParams,
        opts?: ToolsOzoneSignatureFindCorrelation.CallOptions,
    ): Promise<ToolsOzoneSignatureFindCorrelation.Response> {
        return this._client.call("tools.ozone.signature.findCorrelation", params, undefined, opts);
    }
}

export class ToolsOzoneSetNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    upsertSet(
        data?: ToolsOzoneSetUpsertSet.InputSchema,
        opts?: ToolsOzoneSetUpsertSet.CallOptions,
    ): Promise<ToolsOzoneSetUpsertSet.Response> {
        return this._client.call("tools.ozone.set.upsertSet", opts?.qp, data, opts);
    }

    querySets(
        params?: ToolsOzoneSetQuerySets.QueryParams,
        opts?: ToolsOzoneSetQuerySets.CallOptions,
    ): Promise<ToolsOzoneSetQuerySets.Response> {
        return this._client.call("tools.ozone.set.querySets", params, undefined, opts);
    }

    getValues(
        params?: ToolsOzoneSetGetValues.QueryParams,
        opts?: ToolsOzoneSetGetValues.CallOptions,
    ): Promise<ToolsOzoneSetGetValues.Response> {
        return this._client
            .call("tools.ozone.set.getValues", params, undefined, opts)
            .catch((e) => {
                throw ToolsOzoneSetGetValues.toKnownErr(e);
            });
    }

    deleteValues(
        data?: ToolsOzoneSetDeleteValues.InputSchema,
        opts?: ToolsOzoneSetDeleteValues.CallOptions,
    ): Promise<ToolsOzoneSetDeleteValues.Response> {
        return this._client
            .call("tools.ozone.set.deleteValues", opts?.qp, data, opts)
            .catch((e) => {
                throw ToolsOzoneSetDeleteValues.toKnownErr(e);
            });
    }

    deleteSet(
        data?: ToolsOzoneSetDeleteSet.InputSchema,
        opts?: ToolsOzoneSetDeleteSet.CallOptions,
    ): Promise<ToolsOzoneSetDeleteSet.Response> {
        return this._client.call("tools.ozone.set.deleteSet", opts?.qp, data, opts).catch((e) => {
            throw ToolsOzoneSetDeleteSet.toKnownErr(e);
        });
    }

    addValues(
        data?: ToolsOzoneSetAddValues.InputSchema,
        opts?: ToolsOzoneSetAddValues.CallOptions,
    ): Promise<ToolsOzoneSetAddValues.Response> {
        return this._client.call("tools.ozone.set.addValues", opts?.qp, data, opts);
    }
}

export class ToolsOzoneServerNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    getConfig(
        params?: ToolsOzoneServerGetConfig.QueryParams,
        opts?: ToolsOzoneServerGetConfig.CallOptions,
    ): Promise<ToolsOzoneServerGetConfig.Response> {
        return this._client.call("tools.ozone.server.getConfig", params, undefined, opts);
    }
}

export class ToolsOzoneModerationNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    searchRepos(
        params?: ToolsOzoneModerationSearchRepos.QueryParams,
        opts?: ToolsOzoneModerationSearchRepos.CallOptions,
    ): Promise<ToolsOzoneModerationSearchRepos.Response> {
        return this._client.call("tools.ozone.moderation.searchRepos", params, undefined, opts);
    }

    queryStatuses(
        params?: ToolsOzoneModerationQueryStatuses.QueryParams,
        opts?: ToolsOzoneModerationQueryStatuses.CallOptions,
    ): Promise<ToolsOzoneModerationQueryStatuses.Response> {
        return this._client.call("tools.ozone.moderation.queryStatuses", params, undefined, opts);
    }

    queryEvents(
        params?: ToolsOzoneModerationQueryEvents.QueryParams,
        opts?: ToolsOzoneModerationQueryEvents.CallOptions,
    ): Promise<ToolsOzoneModerationQueryEvents.Response> {
        return this._client.call("tools.ozone.moderation.queryEvents", params, undefined, opts);
    }

    getRepos(
        params?: ToolsOzoneModerationGetRepos.QueryParams,
        opts?: ToolsOzoneModerationGetRepos.CallOptions,
    ): Promise<ToolsOzoneModerationGetRepos.Response> {
        return this._client.call("tools.ozone.moderation.getRepos", params, undefined, opts);
    }

    getRepo(
        params?: ToolsOzoneModerationGetRepo.QueryParams,
        opts?: ToolsOzoneModerationGetRepo.CallOptions,
    ): Promise<ToolsOzoneModerationGetRepo.Response> {
        return this._client
            .call("tools.ozone.moderation.getRepo", params, undefined, opts)
            .catch((e) => {
                throw ToolsOzoneModerationGetRepo.toKnownErr(e);
            });
    }

    getRecords(
        params?: ToolsOzoneModerationGetRecords.QueryParams,
        opts?: ToolsOzoneModerationGetRecords.CallOptions,
    ): Promise<ToolsOzoneModerationGetRecords.Response> {
        return this._client.call("tools.ozone.moderation.getRecords", params, undefined, opts);
    }

    getRecord(
        params?: ToolsOzoneModerationGetRecord.QueryParams,
        opts?: ToolsOzoneModerationGetRecord.CallOptions,
    ): Promise<ToolsOzoneModerationGetRecord.Response> {
        return this._client
            .call("tools.ozone.moderation.getRecord", params, undefined, opts)
            .catch((e) => {
                throw ToolsOzoneModerationGetRecord.toKnownErr(e);
            });
    }

    getEvent(
        params?: ToolsOzoneModerationGetEvent.QueryParams,
        opts?: ToolsOzoneModerationGetEvent.CallOptions,
    ): Promise<ToolsOzoneModerationGetEvent.Response> {
        return this._client.call("tools.ozone.moderation.getEvent", params, undefined, opts);
    }

    emitEvent(
        data?: ToolsOzoneModerationEmitEvent.InputSchema,
        opts?: ToolsOzoneModerationEmitEvent.CallOptions,
    ): Promise<ToolsOzoneModerationEmitEvent.Response> {
        return this._client
            .call("tools.ozone.moderation.emitEvent", opts?.qp, data, opts)
            .catch((e) => {
                throw ToolsOzoneModerationEmitEvent.toKnownErr(e);
            });
    }
}

export class ToolsOzoneCommunicationNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateTemplate(
        data?: ToolsOzoneCommunicationUpdateTemplate.InputSchema,
        opts?: ToolsOzoneCommunicationUpdateTemplate.CallOptions,
    ): Promise<ToolsOzoneCommunicationUpdateTemplate.Response> {
        return this._client
            .call("tools.ozone.communication.updateTemplate", opts?.qp, data, opts)
            .catch((e) => {
                throw ToolsOzoneCommunicationUpdateTemplate.toKnownErr(e);
            });
    }

    listTemplates(
        params?: ToolsOzoneCommunicationListTemplates.QueryParams,
        opts?: ToolsOzoneCommunicationListTemplates.CallOptions,
    ): Promise<ToolsOzoneCommunicationListTemplates.Response> {
        return this._client.call(
            "tools.ozone.communication.listTemplates",
            params,
            undefined,
            opts,
        );
    }

    deleteTemplate(
        data?: ToolsOzoneCommunicationDeleteTemplate.InputSchema,
        opts?: ToolsOzoneCommunicationDeleteTemplate.CallOptions,
    ): Promise<ToolsOzoneCommunicationDeleteTemplate.Response> {
        return this._client.call("tools.ozone.communication.deleteTemplate", opts?.qp, data, opts);
    }

    createTemplate(
        data?: ToolsOzoneCommunicationCreateTemplate.InputSchema,
        opts?: ToolsOzoneCommunicationCreateTemplate.CallOptions,
    ): Promise<ToolsOzoneCommunicationCreateTemplate.Response> {
        return this._client
            .call("tools.ozone.communication.createTemplate", opts?.qp, data, opts)
            .catch((e) => {
                throw ToolsOzoneCommunicationCreateTemplate.toKnownErr(e);
            });
    }
}

export class ComNS {
    _client: XrpcClient;
    atproto: ComAtprotoNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.atproto = new ComAtprotoNS(client);
    }
}

export class ComAtprotoNS {
    _client: XrpcClient;
    temp: ComAtprotoTempNS;
    sync: ComAtprotoSyncNS;
    server: ComAtprotoServerNS;
    repo: ComAtprotoRepoNS;
    moderation: ComAtprotoModerationNS;
    label: ComAtprotoLabelNS;
    identity: ComAtprotoIdentityNS;
    admin: ComAtprotoAdminNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.temp = new ComAtprotoTempNS(client);
        this.sync = new ComAtprotoSyncNS(client);
        this.server = new ComAtprotoServerNS(client);
        this.repo = new ComAtprotoRepoNS(client);
        this.moderation = new ComAtprotoModerationNS(client);
        this.label = new ComAtprotoLabelNS(client);
        this.identity = new ComAtprotoIdentityNS(client);
        this.admin = new ComAtprotoAdminNS(client);
    }
}

export class ComAtprotoTempNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    requestPhoneVerification(
        data?: ComAtprotoTempRequestPhoneVerification.InputSchema,
        opts?: ComAtprotoTempRequestPhoneVerification.CallOptions,
    ): Promise<ComAtprotoTempRequestPhoneVerification.Response> {
        return this._client.call("com.atproto.temp.requestPhoneVerification", opts?.qp, data, opts);
    }

    fetchLabels(
        params?: ComAtprotoTempFetchLabels.QueryParams,
        opts?: ComAtprotoTempFetchLabels.CallOptions,
    ): Promise<ComAtprotoTempFetchLabels.Response> {
        return this._client.call("com.atproto.temp.fetchLabels", params, undefined, opts);
    }

    checkSignupQueue(
        params?: ComAtprotoTempCheckSignupQueue.QueryParams,
        opts?: ComAtprotoTempCheckSignupQueue.CallOptions,
    ): Promise<ComAtprotoTempCheckSignupQueue.Response> {
        return this._client.call("com.atproto.temp.checkSignupQueue", params, undefined, opts);
    }
}

export class ComAtprotoSyncNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    requestCrawl(
        data?: ComAtprotoSyncRequestCrawl.InputSchema,
        opts?: ComAtprotoSyncRequestCrawl.CallOptions,
    ): Promise<ComAtprotoSyncRequestCrawl.Response> {
        return this._client.call("com.atproto.sync.requestCrawl", opts?.qp, data, opts);
    }

    notifyOfUpdate(
        data?: ComAtprotoSyncNotifyOfUpdate.InputSchema,
        opts?: ComAtprotoSyncNotifyOfUpdate.CallOptions,
    ): Promise<ComAtprotoSyncNotifyOfUpdate.Response> {
        return this._client.call("com.atproto.sync.notifyOfUpdate", opts?.qp, data, opts);
    }

    listRepos(
        params?: ComAtprotoSyncListRepos.QueryParams,
        opts?: ComAtprotoSyncListRepos.CallOptions,
    ): Promise<ComAtprotoSyncListRepos.Response> {
        return this._client.call("com.atproto.sync.listRepos", params, undefined, opts);
    }

    listBlobs(
        params?: ComAtprotoSyncListBlobs.QueryParams,
        opts?: ComAtprotoSyncListBlobs.CallOptions,
    ): Promise<ComAtprotoSyncListBlobs.Response> {
        return this._client
            .call("com.atproto.sync.listBlobs", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoSyncListBlobs.toKnownErr(e);
            });
    }

    getRepoStatus(
        params?: ComAtprotoSyncGetRepoStatus.QueryParams,
        opts?: ComAtprotoSyncGetRepoStatus.CallOptions,
    ): Promise<ComAtprotoSyncGetRepoStatus.Response> {
        return this._client
            .call("com.atproto.sync.getRepoStatus", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoSyncGetRepoStatus.toKnownErr(e);
            });
    }

    getRepo(
        params?: ComAtprotoSyncGetRepo.QueryParams,
        opts?: ComAtprotoSyncGetRepo.CallOptions,
    ): Promise<ComAtprotoSyncGetRepo.Response> {
        return this._client.call("com.atproto.sync.getRepo", params, undefined, opts).catch((e) => {
            throw ComAtprotoSyncGetRepo.toKnownErr(e);
        });
    }

    getRecord(
        params?: ComAtprotoSyncGetRecord.QueryParams,
        opts?: ComAtprotoSyncGetRecord.CallOptions,
    ): Promise<ComAtprotoSyncGetRecord.Response> {
        return this._client
            .call("com.atproto.sync.getRecord", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoSyncGetRecord.toKnownErr(e);
            });
    }

    getLatestCommit(
        params?: ComAtprotoSyncGetLatestCommit.QueryParams,
        opts?: ComAtprotoSyncGetLatestCommit.CallOptions,
    ): Promise<ComAtprotoSyncGetLatestCommit.Response> {
        return this._client
            .call("com.atproto.sync.getLatestCommit", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoSyncGetLatestCommit.toKnownErr(e);
            });
    }

    getHead(
        params?: ComAtprotoSyncGetHead.QueryParams,
        opts?: ComAtprotoSyncGetHead.CallOptions,
    ): Promise<ComAtprotoSyncGetHead.Response> {
        return this._client.call("com.atproto.sync.getHead", params, undefined, opts).catch((e) => {
            throw ComAtprotoSyncGetHead.toKnownErr(e);
        });
    }

    getCheckout(
        params?: ComAtprotoSyncGetCheckout.QueryParams,
        opts?: ComAtprotoSyncGetCheckout.CallOptions,
    ): Promise<ComAtprotoSyncGetCheckout.Response> {
        return this._client.call("com.atproto.sync.getCheckout", params, undefined, opts);
    }

    getBlocks(
        params?: ComAtprotoSyncGetBlocks.QueryParams,
        opts?: ComAtprotoSyncGetBlocks.CallOptions,
    ): Promise<ComAtprotoSyncGetBlocks.Response> {
        return this._client
            .call("com.atproto.sync.getBlocks", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoSyncGetBlocks.toKnownErr(e);
            });
    }

    getBlob(
        params?: ComAtprotoSyncGetBlob.QueryParams,
        opts?: ComAtprotoSyncGetBlob.CallOptions,
    ): Promise<ComAtprotoSyncGetBlob.Response> {
        return this._client.call("com.atproto.sync.getBlob", params, undefined, opts).catch((e) => {
            throw ComAtprotoSyncGetBlob.toKnownErr(e);
        });
    }
}

export class ComAtprotoServerNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateEmail(
        data?: ComAtprotoServerUpdateEmail.InputSchema,
        opts?: ComAtprotoServerUpdateEmail.CallOptions,
    ): Promise<ComAtprotoServerUpdateEmail.Response> {
        return this._client
            .call("com.atproto.server.updateEmail", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerUpdateEmail.toKnownErr(e);
            });
    }

    revokeAppPassword(
        data?: ComAtprotoServerRevokeAppPassword.InputSchema,
        opts?: ComAtprotoServerRevokeAppPassword.CallOptions,
    ): Promise<ComAtprotoServerRevokeAppPassword.Response> {
        return this._client.call("com.atproto.server.revokeAppPassword", opts?.qp, data, opts);
    }

    resetPassword(
        data?: ComAtprotoServerResetPassword.InputSchema,
        opts?: ComAtprotoServerResetPassword.CallOptions,
    ): Promise<ComAtprotoServerResetPassword.Response> {
        return this._client
            .call("com.atproto.server.resetPassword", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerResetPassword.toKnownErr(e);
            });
    }

    reserveSigningKey(
        data?: ComAtprotoServerReserveSigningKey.InputSchema,
        opts?: ComAtprotoServerReserveSigningKey.CallOptions,
    ): Promise<ComAtprotoServerReserveSigningKey.Response> {
        return this._client.call("com.atproto.server.reserveSigningKey", opts?.qp, data, opts);
    }

    requestPasswordReset(
        data?: ComAtprotoServerRequestPasswordReset.InputSchema,
        opts?: ComAtprotoServerRequestPasswordReset.CallOptions,
    ): Promise<ComAtprotoServerRequestPasswordReset.Response> {
        return this._client.call("com.atproto.server.requestPasswordReset", opts?.qp, data, opts);
    }

    requestEmailUpdate(
        data?: ComAtprotoServerRequestEmailUpdate.InputSchema,
        opts?: ComAtprotoServerRequestEmailUpdate.CallOptions,
    ): Promise<ComAtprotoServerRequestEmailUpdate.Response> {
        return this._client.call("com.atproto.server.requestEmailUpdate", opts?.qp, data, opts);
    }

    requestEmailConfirmation(
        data?: ComAtprotoServerRequestEmailConfirmation.InputSchema,
        opts?: ComAtprotoServerRequestEmailConfirmation.CallOptions,
    ): Promise<ComAtprotoServerRequestEmailConfirmation.Response> {
        return this._client.call(
            "com.atproto.server.requestEmailConfirmation",
            opts?.qp,
            data,
            opts,
        );
    }

    requestAccountDelete(
        data?: ComAtprotoServerRequestAccountDelete.InputSchema,
        opts?: ComAtprotoServerRequestAccountDelete.CallOptions,
    ): Promise<ComAtprotoServerRequestAccountDelete.Response> {
        return this._client.call("com.atproto.server.requestAccountDelete", opts?.qp, data, opts);
    }

    refreshSession(
        data?: ComAtprotoServerRefreshSession.InputSchema,
        opts?: ComAtprotoServerRefreshSession.CallOptions,
    ): Promise<ComAtprotoServerRefreshSession.Response> {
        return this._client
            .call("com.atproto.server.refreshSession", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerRefreshSession.toKnownErr(e);
            });
    }

    listAppPasswords(
        params?: ComAtprotoServerListAppPasswords.QueryParams,
        opts?: ComAtprotoServerListAppPasswords.CallOptions,
    ): Promise<ComAtprotoServerListAppPasswords.Response> {
        return this._client
            .call("com.atproto.server.listAppPasswords", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoServerListAppPasswords.toKnownErr(e);
            });
    }

    getSession(
        params?: ComAtprotoServerGetSession.QueryParams,
        opts?: ComAtprotoServerGetSession.CallOptions,
    ): Promise<ComAtprotoServerGetSession.Response> {
        return this._client.call("com.atproto.server.getSession", params, undefined, opts);
    }

    getServiceAuth(
        params?: ComAtprotoServerGetServiceAuth.QueryParams,
        opts?: ComAtprotoServerGetServiceAuth.CallOptions,
    ): Promise<ComAtprotoServerGetServiceAuth.Response> {
        return this._client
            .call("com.atproto.server.getServiceAuth", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoServerGetServiceAuth.toKnownErr(e);
            });
    }

    getAccountInviteCodes(
        params?: ComAtprotoServerGetAccountInviteCodes.QueryParams,
        opts?: ComAtprotoServerGetAccountInviteCodes.CallOptions,
    ): Promise<ComAtprotoServerGetAccountInviteCodes.Response> {
        return this._client
            .call("com.atproto.server.getAccountInviteCodes", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoServerGetAccountInviteCodes.toKnownErr(e);
            });
    }

    describeServer(
        params?: ComAtprotoServerDescribeServer.QueryParams,
        opts?: ComAtprotoServerDescribeServer.CallOptions,
    ): Promise<ComAtprotoServerDescribeServer.Response> {
        return this._client.call("com.atproto.server.describeServer", params, undefined, opts);
    }

    deleteSession(
        data?: ComAtprotoServerDeleteSession.InputSchema,
        opts?: ComAtprotoServerDeleteSession.CallOptions,
    ): Promise<ComAtprotoServerDeleteSession.Response> {
        return this._client.call("com.atproto.server.deleteSession", opts?.qp, data, opts);
    }

    deleteAccount(
        data?: ComAtprotoServerDeleteAccount.InputSchema,
        opts?: ComAtprotoServerDeleteAccount.CallOptions,
    ): Promise<ComAtprotoServerDeleteAccount.Response> {
        return this._client
            .call("com.atproto.server.deleteAccount", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerDeleteAccount.toKnownErr(e);
            });
    }

    deactivateAccount(
        data?: ComAtprotoServerDeactivateAccount.InputSchema,
        opts?: ComAtprotoServerDeactivateAccount.CallOptions,
    ): Promise<ComAtprotoServerDeactivateAccount.Response> {
        return this._client.call("com.atproto.server.deactivateAccount", opts?.qp, data, opts);
    }

    createSession(
        data?: ComAtprotoServerCreateSession.InputSchema,
        opts?: ComAtprotoServerCreateSession.CallOptions,
    ): Promise<ComAtprotoServerCreateSession.Response> {
        return this._client
            .call("com.atproto.server.createSession", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerCreateSession.toKnownErr(e);
            });
    }

    createInviteCodes(
        data?: ComAtprotoServerCreateInviteCodes.InputSchema,
        opts?: ComAtprotoServerCreateInviteCodes.CallOptions,
    ): Promise<ComAtprotoServerCreateInviteCodes.Response> {
        return this._client.call("com.atproto.server.createInviteCodes", opts?.qp, data, opts);
    }

    createInviteCode(
        data?: ComAtprotoServerCreateInviteCode.InputSchema,
        opts?: ComAtprotoServerCreateInviteCode.CallOptions,
    ): Promise<ComAtprotoServerCreateInviteCode.Response> {
        return this._client.call("com.atproto.server.createInviteCode", opts?.qp, data, opts);
    }

    createAppPassword(
        data?: ComAtprotoServerCreateAppPassword.InputSchema,
        opts?: ComAtprotoServerCreateAppPassword.CallOptions,
    ): Promise<ComAtprotoServerCreateAppPassword.Response> {
        return this._client
            .call("com.atproto.server.createAppPassword", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerCreateAppPassword.toKnownErr(e);
            });
    }

    createAccount(
        data?: ComAtprotoServerCreateAccount.InputSchema,
        opts?: ComAtprotoServerCreateAccount.CallOptions,
    ): Promise<ComAtprotoServerCreateAccount.Response> {
        return this._client
            .call("com.atproto.server.createAccount", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerCreateAccount.toKnownErr(e);
            });
    }

    confirmEmail(
        data?: ComAtprotoServerConfirmEmail.InputSchema,
        opts?: ComAtprotoServerConfirmEmail.CallOptions,
    ): Promise<ComAtprotoServerConfirmEmail.Response> {
        return this._client
            .call("com.atproto.server.confirmEmail", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoServerConfirmEmail.toKnownErr(e);
            });
    }

    checkAccountStatus(
        params?: ComAtprotoServerCheckAccountStatus.QueryParams,
        opts?: ComAtprotoServerCheckAccountStatus.CallOptions,
    ): Promise<ComAtprotoServerCheckAccountStatus.Response> {
        return this._client.call("com.atproto.server.checkAccountStatus", params, undefined, opts);
    }

    activateAccount(
        data?: ComAtprotoServerActivateAccount.InputSchema,
        opts?: ComAtprotoServerActivateAccount.CallOptions,
    ): Promise<ComAtprotoServerActivateAccount.Response> {
        return this._client.call("com.atproto.server.activateAccount", opts?.qp, data, opts);
    }
}

export class ComAtprotoRepoNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    uploadBlob(
        data?: ComAtprotoRepoUploadBlob.InputSchema,
        opts?: ComAtprotoRepoUploadBlob.CallOptions,
    ): Promise<ComAtprotoRepoUploadBlob.Response> {
        return this._client.call("com.atproto.repo.uploadBlob", opts?.qp, data, opts);
    }

    putRecord(
        data?: ComAtprotoRepoPutRecord.InputSchema,
        opts?: ComAtprotoRepoPutRecord.CallOptions,
    ): Promise<ComAtprotoRepoPutRecord.Response> {
        return this._client.call("com.atproto.repo.putRecord", opts?.qp, data, opts).catch((e) => {
            throw ComAtprotoRepoPutRecord.toKnownErr(e);
        });
    }

    listRecords(
        params?: ComAtprotoRepoListRecords.QueryParams,
        opts?: ComAtprotoRepoListRecords.CallOptions,
    ): Promise<ComAtprotoRepoListRecords.Response> {
        return this._client.call("com.atproto.repo.listRecords", params, undefined, opts);
    }

    listMissingBlobs(
        params?: ComAtprotoRepoListMissingBlobs.QueryParams,
        opts?: ComAtprotoRepoListMissingBlobs.CallOptions,
    ): Promise<ComAtprotoRepoListMissingBlobs.Response> {
        return this._client.call("com.atproto.repo.listMissingBlobs", params, undefined, opts);
    }

    importRepo(
        data?: ComAtprotoRepoImportRepo.InputSchema,
        opts?: ComAtprotoRepoImportRepo.CallOptions,
    ): Promise<ComAtprotoRepoImportRepo.Response> {
        return this._client.call("com.atproto.repo.importRepo", opts?.qp, data, opts);
    }

    getRecord(
        params?: ComAtprotoRepoGetRecord.QueryParams,
        opts?: ComAtprotoRepoGetRecord.CallOptions,
    ): Promise<ComAtprotoRepoGetRecord.Response> {
        return this._client
            .call("com.atproto.repo.getRecord", params, undefined, opts)
            .catch((e) => {
                throw ComAtprotoRepoGetRecord.toKnownErr(e);
            });
    }

    describeRepo(
        params?: ComAtprotoRepoDescribeRepo.QueryParams,
        opts?: ComAtprotoRepoDescribeRepo.CallOptions,
    ): Promise<ComAtprotoRepoDescribeRepo.Response> {
        return this._client.call("com.atproto.repo.describeRepo", params, undefined, opts);
    }

    deleteRecord(
        data?: ComAtprotoRepoDeleteRecord.InputSchema,
        opts?: ComAtprotoRepoDeleteRecord.CallOptions,
    ): Promise<ComAtprotoRepoDeleteRecord.Response> {
        return this._client
            .call("com.atproto.repo.deleteRecord", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoRepoDeleteRecord.toKnownErr(e);
            });
    }

    createRecord(
        data?: ComAtprotoRepoCreateRecord.InputSchema,
        opts?: ComAtprotoRepoCreateRecord.CallOptions,
    ): Promise<ComAtprotoRepoCreateRecord.Response> {
        return this._client
            .call("com.atproto.repo.createRecord", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoRepoCreateRecord.toKnownErr(e);
            });
    }

    applyWrites(
        data?: ComAtprotoRepoApplyWrites.InputSchema,
        opts?: ComAtprotoRepoApplyWrites.CallOptions,
    ): Promise<ComAtprotoRepoApplyWrites.Response> {
        return this._client
            .call("com.atproto.repo.applyWrites", opts?.qp, data, opts)
            .catch((e) => {
                throw ComAtprotoRepoApplyWrites.toKnownErr(e);
            });
    }
}

export class ComAtprotoModerationNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    createReport(
        data?: ComAtprotoModerationCreateReport.InputSchema,
        opts?: ComAtprotoModerationCreateReport.CallOptions,
    ): Promise<ComAtprotoModerationCreateReport.Response> {
        return this._client.call("com.atproto.moderation.createReport", opts?.qp, data, opts);
    }
}

export class ComAtprotoLabelNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    queryLabels(
        params?: ComAtprotoLabelQueryLabels.QueryParams,
        opts?: ComAtprotoLabelQueryLabels.CallOptions,
    ): Promise<ComAtprotoLabelQueryLabels.Response> {
        return this._client.call("com.atproto.label.queryLabels", params, undefined, opts);
    }
}

export class ComAtprotoIdentityNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateHandle(
        data?: ComAtprotoIdentityUpdateHandle.InputSchema,
        opts?: ComAtprotoIdentityUpdateHandle.CallOptions,
    ): Promise<ComAtprotoIdentityUpdateHandle.Response> {
        return this._client.call("com.atproto.identity.updateHandle", opts?.qp, data, opts);
    }

    submitPlcOperation(
        data?: ComAtprotoIdentitySubmitPlcOperation.InputSchema,
        opts?: ComAtprotoIdentitySubmitPlcOperation.CallOptions,
    ): Promise<ComAtprotoIdentitySubmitPlcOperation.Response> {
        return this._client.call("com.atproto.identity.submitPlcOperation", opts?.qp, data, opts);
    }

    signPlcOperation(
        data?: ComAtprotoIdentitySignPlcOperation.InputSchema,
        opts?: ComAtprotoIdentitySignPlcOperation.CallOptions,
    ): Promise<ComAtprotoIdentitySignPlcOperation.Response> {
        return this._client.call("com.atproto.identity.signPlcOperation", opts?.qp, data, opts);
    }

    resolveHandle(
        params?: ComAtprotoIdentityResolveHandle.QueryParams,
        opts?: ComAtprotoIdentityResolveHandle.CallOptions,
    ): Promise<ComAtprotoIdentityResolveHandle.Response> {
        return this._client.call("com.atproto.identity.resolveHandle", params, undefined, opts);
    }

    requestPlcOperationSignature(
        data?: ComAtprotoIdentityRequestPlcOperationSignature.InputSchema,
        opts?: ComAtprotoIdentityRequestPlcOperationSignature.CallOptions,
    ): Promise<ComAtprotoIdentityRequestPlcOperationSignature.Response> {
        return this._client.call(
            "com.atproto.identity.requestPlcOperationSignature",
            opts?.qp,
            data,
            opts,
        );
    }

    getRecommendedDidCredentials(
        params?: ComAtprotoIdentityGetRecommendedDidCredentials.QueryParams,
        opts?: ComAtprotoIdentityGetRecommendedDidCredentials.CallOptions,
    ): Promise<ComAtprotoIdentityGetRecommendedDidCredentials.Response> {
        return this._client.call(
            "com.atproto.identity.getRecommendedDidCredentials",
            params,
            undefined,
            opts,
        );
    }
}

export class ComAtprotoAdminNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateSubjectStatus(
        data?: ComAtprotoAdminUpdateSubjectStatus.InputSchema,
        opts?: ComAtprotoAdminUpdateSubjectStatus.CallOptions,
    ): Promise<ComAtprotoAdminUpdateSubjectStatus.Response> {
        return this._client.call("com.atproto.admin.updateSubjectStatus", opts?.qp, data, opts);
    }

    updateAccountPassword(
        data?: ComAtprotoAdminUpdateAccountPassword.InputSchema,
        opts?: ComAtprotoAdminUpdateAccountPassword.CallOptions,
    ): Promise<ComAtprotoAdminUpdateAccountPassword.Response> {
        return this._client.call("com.atproto.admin.updateAccountPassword", opts?.qp, data, opts);
    }

    updateAccountHandle(
        data?: ComAtprotoAdminUpdateAccountHandle.InputSchema,
        opts?: ComAtprotoAdminUpdateAccountHandle.CallOptions,
    ): Promise<ComAtprotoAdminUpdateAccountHandle.Response> {
        return this._client.call("com.atproto.admin.updateAccountHandle", opts?.qp, data, opts);
    }

    updateAccountEmail(
        data?: ComAtprotoAdminUpdateAccountEmail.InputSchema,
        opts?: ComAtprotoAdminUpdateAccountEmail.CallOptions,
    ): Promise<ComAtprotoAdminUpdateAccountEmail.Response> {
        return this._client.call("com.atproto.admin.updateAccountEmail", opts?.qp, data, opts);
    }

    sendEmail(
        data?: ComAtprotoAdminSendEmail.InputSchema,
        opts?: ComAtprotoAdminSendEmail.CallOptions,
    ): Promise<ComAtprotoAdminSendEmail.Response> {
        return this._client.call("com.atproto.admin.sendEmail", opts?.qp, data, opts);
    }

    searchAccounts(
        params?: ComAtprotoAdminSearchAccounts.QueryParams,
        opts?: ComAtprotoAdminSearchAccounts.CallOptions,
    ): Promise<ComAtprotoAdminSearchAccounts.Response> {
        return this._client.call("com.atproto.admin.searchAccounts", params, undefined, opts);
    }

    getSubjectStatus(
        params?: ComAtprotoAdminGetSubjectStatus.QueryParams,
        opts?: ComAtprotoAdminGetSubjectStatus.CallOptions,
    ): Promise<ComAtprotoAdminGetSubjectStatus.Response> {
        return this._client.call("com.atproto.admin.getSubjectStatus", params, undefined, opts);
    }

    getInviteCodes(
        params?: ComAtprotoAdminGetInviteCodes.QueryParams,
        opts?: ComAtprotoAdminGetInviteCodes.CallOptions,
    ): Promise<ComAtprotoAdminGetInviteCodes.Response> {
        return this._client.call("com.atproto.admin.getInviteCodes", params, undefined, opts);
    }

    getAccountInfos(
        params?: ComAtprotoAdminGetAccountInfos.QueryParams,
        opts?: ComAtprotoAdminGetAccountInfos.CallOptions,
    ): Promise<ComAtprotoAdminGetAccountInfos.Response> {
        return this._client.call("com.atproto.admin.getAccountInfos", params, undefined, opts);
    }

    getAccountInfo(
        params?: ComAtprotoAdminGetAccountInfo.QueryParams,
        opts?: ComAtprotoAdminGetAccountInfo.CallOptions,
    ): Promise<ComAtprotoAdminGetAccountInfo.Response> {
        return this._client.call("com.atproto.admin.getAccountInfo", params, undefined, opts);
    }

    enableAccountInvites(
        data?: ComAtprotoAdminEnableAccountInvites.InputSchema,
        opts?: ComAtprotoAdminEnableAccountInvites.CallOptions,
    ): Promise<ComAtprotoAdminEnableAccountInvites.Response> {
        return this._client.call("com.atproto.admin.enableAccountInvites", opts?.qp, data, opts);
    }

    disableInviteCodes(
        data?: ComAtprotoAdminDisableInviteCodes.InputSchema,
        opts?: ComAtprotoAdminDisableInviteCodes.CallOptions,
    ): Promise<ComAtprotoAdminDisableInviteCodes.Response> {
        return this._client.call("com.atproto.admin.disableInviteCodes", opts?.qp, data, opts);
    }

    disableAccountInvites(
        data?: ComAtprotoAdminDisableAccountInvites.InputSchema,
        opts?: ComAtprotoAdminDisableAccountInvites.CallOptions,
    ): Promise<ComAtprotoAdminDisableAccountInvites.Response> {
        return this._client.call("com.atproto.admin.disableAccountInvites", opts?.qp, data, opts);
    }

    deleteAccount(
        data?: ComAtprotoAdminDeleteAccount.InputSchema,
        opts?: ComAtprotoAdminDeleteAccount.CallOptions,
    ): Promise<ComAtprotoAdminDeleteAccount.Response> {
        return this._client.call("com.atproto.admin.deleteAccount", opts?.qp, data, opts);
    }
}

export class ChatNS {
    _client: XrpcClient;
    bsky: ChatBskyNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.bsky = new ChatBskyNS(client);
    }
}

export class ChatBskyNS {
    _client: XrpcClient;
    convo: ChatBskyConvoNS;
    actor: ChatBskyActorNS;
    moderation: ChatBskyModerationNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.convo = new ChatBskyConvoNS(client);
        this.actor = new ChatBskyActorNS(client);
        this.moderation = new ChatBskyModerationNS(client);
    }
}

export class ChatBskyConvoNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateRead(
        data?: ChatBskyConvoUpdateRead.InputSchema,
        opts?: ChatBskyConvoUpdateRead.CallOptions,
    ): Promise<ChatBskyConvoUpdateRead.Response> {
        return this._client.call("chat.bsky.convo.updateRead", opts?.qp, data, opts);
    }

    unmuteConvo(
        data?: ChatBskyConvoUnmuteConvo.InputSchema,
        opts?: ChatBskyConvoUnmuteConvo.CallOptions,
    ): Promise<ChatBskyConvoUnmuteConvo.Response> {
        return this._client.call("chat.bsky.convo.unmuteConvo", opts?.qp, data, opts);
    }

    sendMessageBatch(
        data?: ChatBskyConvoSendMessageBatch.InputSchema,
        opts?: ChatBskyConvoSendMessageBatch.CallOptions,
    ): Promise<ChatBskyConvoSendMessageBatch.Response> {
        return this._client.call("chat.bsky.convo.sendMessageBatch", opts?.qp, data, opts);
    }

    sendMessage(
        data?: ChatBskyConvoSendMessage.InputSchema,
        opts?: ChatBskyConvoSendMessage.CallOptions,
    ): Promise<ChatBskyConvoSendMessage.Response> {
        return this._client.call("chat.bsky.convo.sendMessage", opts?.qp, data, opts);
    }

    muteConvo(
        data?: ChatBskyConvoMuteConvo.InputSchema,
        opts?: ChatBskyConvoMuteConvo.CallOptions,
    ): Promise<ChatBskyConvoMuteConvo.Response> {
        return this._client.call("chat.bsky.convo.muteConvo", opts?.qp, data, opts);
    }

    listConvos(
        params?: ChatBskyConvoListConvos.QueryParams,
        opts?: ChatBskyConvoListConvos.CallOptions,
    ): Promise<ChatBskyConvoListConvos.Response> {
        return this._client.call("chat.bsky.convo.listConvos", params, undefined, opts);
    }

    leaveConvo(
        data?: ChatBskyConvoLeaveConvo.InputSchema,
        opts?: ChatBskyConvoLeaveConvo.CallOptions,
    ): Promise<ChatBskyConvoLeaveConvo.Response> {
        return this._client.call("chat.bsky.convo.leaveConvo", opts?.qp, data, opts);
    }

    getMessages(
        params?: ChatBskyConvoGetMessages.QueryParams,
        opts?: ChatBskyConvoGetMessages.CallOptions,
    ): Promise<ChatBskyConvoGetMessages.Response> {
        return this._client.call("chat.bsky.convo.getMessages", params, undefined, opts);
    }

    getLog(
        params?: ChatBskyConvoGetLog.QueryParams,
        opts?: ChatBskyConvoGetLog.CallOptions,
    ): Promise<ChatBskyConvoGetLog.Response> {
        return this._client.call("chat.bsky.convo.getLog", params, undefined, opts);
    }

    getConvoForMembers(
        params?: ChatBskyConvoGetConvoForMembers.QueryParams,
        opts?: ChatBskyConvoGetConvoForMembers.CallOptions,
    ): Promise<ChatBskyConvoGetConvoForMembers.Response> {
        return this._client.call("chat.bsky.convo.getConvoForMembers", params, undefined, opts);
    }

    getConvo(
        params?: ChatBskyConvoGetConvo.QueryParams,
        opts?: ChatBskyConvoGetConvo.CallOptions,
    ): Promise<ChatBskyConvoGetConvo.Response> {
        return this._client.call("chat.bsky.convo.getConvo", params, undefined, opts);
    }

    deleteMessageForSelf(
        data?: ChatBskyConvoDeleteMessageForSelf.InputSchema,
        opts?: ChatBskyConvoDeleteMessageForSelf.CallOptions,
    ): Promise<ChatBskyConvoDeleteMessageForSelf.Response> {
        return this._client.call("chat.bsky.convo.deleteMessageForSelf", opts?.qp, data, opts);
    }
}

export class ChatBskyActorNS {
    _client: XrpcClient;
    declaration: DeclarationRecord;

    constructor(client: XrpcClient) {
        this._client = client;
        this.declaration = new DeclarationRecord(client);
    }

    exportAccountData(
        params?: ChatBskyActorExportAccountData.QueryParams,
        opts?: ChatBskyActorExportAccountData.CallOptions,
    ): Promise<ChatBskyActorExportAccountData.Response> {
        return this._client.call("chat.bsky.actor.exportAccountData", params, undefined, opts);
    }

    deleteAccount(
        data?: ChatBskyActorDeleteAccount.InputSchema,
        opts?: ChatBskyActorDeleteAccount.CallOptions,
    ): Promise<ChatBskyActorDeleteAccount.Response> {
        return this._client.call("chat.bsky.actor.deleteAccount", opts?.qp, data, opts);
    }
}

export class DeclarationRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: ChatBskyActorDeclaration.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "chat.bsky.actor.declaration",
            ...params,
        });
        return res.data;
    }

    async get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">): Promise<{
        uri: string;
        cid: string;
        value: ChatBskyActorDeclaration.Record;
    }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "chat.bsky.actor.declaration",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: ChatBskyActorDeclaration.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "chat.bsky.actor.declaration";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            {
                collection: "chat.bsky.actor.declaration",
                rkey: "self",
                ...params,
                record,
            },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "chat.bsky.actor.declaration", ...params },
            { headers },
        );
    }
}

export class ChatBskyModerationNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateActorAccess(
        data?: ChatBskyModerationUpdateActorAccess.InputSchema,
        opts?: ChatBskyModerationUpdateActorAccess.CallOptions,
    ): Promise<ChatBskyModerationUpdateActorAccess.Response> {
        return this._client.call("chat.bsky.moderation.updateActorAccess", opts?.qp, data, opts);
    }

    getMessageContext(
        params?: ChatBskyModerationGetMessageContext.QueryParams,
        opts?: ChatBskyModerationGetMessageContext.CallOptions,
    ): Promise<ChatBskyModerationGetMessageContext.Response> {
        return this._client.call("chat.bsky.moderation.getMessageContext", params, undefined, opts);
    }

    getActorMetadata(
        params?: ChatBskyModerationGetActorMetadata.QueryParams,
        opts?: ChatBskyModerationGetActorMetadata.CallOptions,
    ): Promise<ChatBskyModerationGetActorMetadata.Response> {
        return this._client.call("chat.bsky.moderation.getActorMetadata", params, undefined, opts);
    }
}

export class AppNS {
    _client: XrpcClient;
    bsky: AppBskyNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.bsky = new AppBskyNS(client);
    }
}

export class AppBskyNS {
    _client: XrpcClient;
    video: AppBskyVideoNS;
    richtext: AppBskyRichtextNS;
    unspecced: AppBskyUnspeccedNS;
    labeler: AppBskyLabelerNS;
    graph: AppBskyGraphNS;
    feed: AppBskyFeedNS;
    embed: AppBskyEmbedNS;
    actor: AppBskyActorNS;
    notification: AppBskyNotificationNS;

    constructor(client: XrpcClient) {
        this._client = client;
        this.video = new AppBskyVideoNS(client);
        this.richtext = new AppBskyRichtextNS(client);
        this.unspecced = new AppBskyUnspeccedNS(client);
        this.labeler = new AppBskyLabelerNS(client);
        this.graph = new AppBskyGraphNS(client);
        this.feed = new AppBskyFeedNS(client);
        this.embed = new AppBskyEmbedNS(client);
        this.actor = new AppBskyActorNS(client);
        this.notification = new AppBskyNotificationNS(client);
    }
}

export class AppBskyVideoNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    uploadVideo(
        data?: AppBskyVideoUploadVideo.InputSchema,
        opts?: AppBskyVideoUploadVideo.CallOptions,
    ): Promise<AppBskyVideoUploadVideo.Response> {
        return this._client.call("app.bsky.video.uploadVideo", opts?.qp, data, opts);
    }

    getUploadLimits(
        params?: AppBskyVideoGetUploadLimits.QueryParams,
        opts?: AppBskyVideoGetUploadLimits.CallOptions,
    ): Promise<AppBskyVideoGetUploadLimits.Response> {
        return this._client.call("app.bsky.video.getUploadLimits", params, undefined, opts);
    }

    getJobStatus(
        params?: AppBskyVideoGetJobStatus.QueryParams,
        opts?: AppBskyVideoGetJobStatus.CallOptions,
    ): Promise<AppBskyVideoGetJobStatus.Response> {
        return this._client.call("app.bsky.video.getJobStatus", params, undefined, opts);
    }
}

export class AppBskyRichtextNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }
}

export class AppBskyUnspeccedNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    searchStarterPacksSkeleton(
        params?: AppBskyUnspeccedSearchStarterPacksSkeleton.QueryParams,
        opts?: AppBskyUnspeccedSearchStarterPacksSkeleton.CallOptions,
    ): Promise<AppBskyUnspeccedSearchStarterPacksSkeleton.Response> {
        return this._client
            .call("app.bsky.unspecced.searchStarterPacksSkeleton", params, undefined, opts)
            .catch((e) => {
                throw AppBskyUnspeccedSearchStarterPacksSkeleton.toKnownErr(e);
            });
    }

    searchPostsSkeleton(
        params?: AppBskyUnspeccedSearchPostsSkeleton.QueryParams,
        opts?: AppBskyUnspeccedSearchPostsSkeleton.CallOptions,
    ): Promise<AppBskyUnspeccedSearchPostsSkeleton.Response> {
        return this._client
            .call("app.bsky.unspecced.searchPostsSkeleton", params, undefined, opts)
            .catch((e) => {
                throw AppBskyUnspeccedSearchPostsSkeleton.toKnownErr(e);
            });
    }

    searchActorsSkeleton(
        params?: AppBskyUnspeccedSearchActorsSkeleton.QueryParams,
        opts?: AppBskyUnspeccedSearchActorsSkeleton.CallOptions,
    ): Promise<AppBskyUnspeccedSearchActorsSkeleton.Response> {
        return this._client
            .call("app.bsky.unspecced.searchActorsSkeleton", params, undefined, opts)
            .catch((e) => {
                throw AppBskyUnspeccedSearchActorsSkeleton.toKnownErr(e);
            });
    }

    getTaggedSuggestions(
        params?: AppBskyUnspeccedGetTaggedSuggestions.QueryParams,
        opts?: AppBskyUnspeccedGetTaggedSuggestions.CallOptions,
    ): Promise<AppBskyUnspeccedGetTaggedSuggestions.Response> {
        return this._client.call(
            "app.bsky.unspecced.getTaggedSuggestions",
            params,
            undefined,
            opts,
        );
    }

    getSuggestionsSkeleton(
        params?: AppBskyUnspeccedGetSuggestionsSkeleton.QueryParams,
        opts?: AppBskyUnspeccedGetSuggestionsSkeleton.CallOptions,
    ): Promise<AppBskyUnspeccedGetSuggestionsSkeleton.Response> {
        return this._client.call(
            "app.bsky.unspecced.getSuggestionsSkeleton",
            params,
            undefined,
            opts,
        );
    }

    getPopularFeedGenerators(
        params?: AppBskyUnspeccedGetPopularFeedGenerators.QueryParams,
        opts?: AppBskyUnspeccedGetPopularFeedGenerators.CallOptions,
    ): Promise<AppBskyUnspeccedGetPopularFeedGenerators.Response> {
        return this._client.call(
            "app.bsky.unspecced.getPopularFeedGenerators",
            params,
            undefined,
            opts,
        );
    }

    getConfig(
        params?: AppBskyUnspeccedGetConfig.QueryParams,
        opts?: AppBskyUnspeccedGetConfig.CallOptions,
    ): Promise<AppBskyUnspeccedGetConfig.Response> {
        return this._client.call("app.bsky.unspecced.getConfig", params, undefined, opts);
    }
}

export class AppBskyLabelerNS {
    _client: XrpcClient;
    service: ServiceRecord;

    constructor(client: XrpcClient) {
        this._client = client;
        this.service = new ServiceRecord(client);
    }

    getServices(
        params?: AppBskyLabelerGetServices.QueryParams,
        opts?: AppBskyLabelerGetServices.CallOptions,
    ): Promise<AppBskyLabelerGetServices.Response> {
        return this._client.call("app.bsky.labeler.getServices", params, undefined, opts);
    }
}

export class ServiceRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyLabelerService.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.labeler.service",
            ...params,
        });
        return res.data;
    }

    async get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">): Promise<{
        uri: string;
        cid: string;
        value: AppBskyLabelerService.Record;
    }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.labeler.service",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyLabelerService.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.labeler.service";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            {
                collection: "app.bsky.labeler.service",
                rkey: "self",
                ...params,
                record,
            },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.labeler.service", ...params },
            { headers },
        );
    }
}

export class AppBskyGraphNS {
    _client: XrpcClient;
    starterpack: StarterpackRecord;
    listitem: ListitemRecord;
    listblock: ListblockRecord;
    list: ListRecord;
    follow: FollowRecord;
    block: BlockRecord;

    constructor(client: XrpcClient) {
        this._client = client;
        this.starterpack = new StarterpackRecord(client);
        this.listitem = new ListitemRecord(client);
        this.listblock = new ListblockRecord(client);
        this.list = new ListRecord(client);
        this.follow = new FollowRecord(client);
        this.block = new BlockRecord(client);
    }

    unmuteThread(
        data?: AppBskyGraphUnmuteThread.InputSchema,
        opts?: AppBskyGraphUnmuteThread.CallOptions,
    ): Promise<AppBskyGraphUnmuteThread.Response> {
        return this._client.call("app.bsky.graph.unmuteThread", opts?.qp, data, opts);
    }

    unmuteActorList(
        data?: AppBskyGraphUnmuteActorList.InputSchema,
        opts?: AppBskyGraphUnmuteActorList.CallOptions,
    ): Promise<AppBskyGraphUnmuteActorList.Response> {
        return this._client.call("app.bsky.graph.unmuteActorList", opts?.qp, data, opts);
    }

    unmuteActor(
        data?: AppBskyGraphUnmuteActor.InputSchema,
        opts?: AppBskyGraphUnmuteActor.CallOptions,
    ): Promise<AppBskyGraphUnmuteActor.Response> {
        return this._client.call("app.bsky.graph.unmuteActor", opts?.qp, data, opts);
    }

    searchStarterPacks(
        params?: AppBskyGraphSearchStarterPacks.QueryParams,
        opts?: AppBskyGraphSearchStarterPacks.CallOptions,
    ): Promise<AppBskyGraphSearchStarterPacks.Response> {
        return this._client.call("app.bsky.graph.searchStarterPacks", params, undefined, opts);
    }

    muteThread(
        data?: AppBskyGraphMuteThread.InputSchema,
        opts?: AppBskyGraphMuteThread.CallOptions,
    ): Promise<AppBskyGraphMuteThread.Response> {
        return this._client.call("app.bsky.graph.muteThread", opts?.qp, data, opts);
    }

    muteActorList(
        data?: AppBskyGraphMuteActorList.InputSchema,
        opts?: AppBskyGraphMuteActorList.CallOptions,
    ): Promise<AppBskyGraphMuteActorList.Response> {
        return this._client.call("app.bsky.graph.muteActorList", opts?.qp, data, opts);
    }

    muteActor(
        data?: AppBskyGraphMuteActor.InputSchema,
        opts?: AppBskyGraphMuteActor.CallOptions,
    ): Promise<AppBskyGraphMuteActor.Response> {
        return this._client.call("app.bsky.graph.muteActor", opts?.qp, data, opts);
    }

    getSuggestedFollowsByActor(
        params?: AppBskyGraphGetSuggestedFollowsByActor.QueryParams,
        opts?: AppBskyGraphGetSuggestedFollowsByActor.CallOptions,
    ): Promise<AppBskyGraphGetSuggestedFollowsByActor.Response> {
        return this._client.call(
            "app.bsky.graph.getSuggestedFollowsByActor",
            params,
            undefined,
            opts,
        );
    }

    getStarterPacks(
        params?: AppBskyGraphGetStarterPacks.QueryParams,
        opts?: AppBskyGraphGetStarterPacks.CallOptions,
    ): Promise<AppBskyGraphGetStarterPacks.Response> {
        return this._client.call("app.bsky.graph.getStarterPacks", params, undefined, opts);
    }

    getStarterPack(
        params?: AppBskyGraphGetStarterPack.QueryParams,
        opts?: AppBskyGraphGetStarterPack.CallOptions,
    ): Promise<AppBskyGraphGetStarterPack.Response> {
        return this._client.call("app.bsky.graph.getStarterPack", params, undefined, opts);
    }

    getRelationships(
        params?: AppBskyGraphGetRelationships.QueryParams,
        opts?: AppBskyGraphGetRelationships.CallOptions,
    ): Promise<AppBskyGraphGetRelationships.Response> {
        return this._client
            .call("app.bsky.graph.getRelationships", params, undefined, opts)
            .catch((e) => {
                throw AppBskyGraphGetRelationships.toKnownErr(e);
            });
    }

    getMutes(
        params?: AppBskyGraphGetMutes.QueryParams,
        opts?: AppBskyGraphGetMutes.CallOptions,
    ): Promise<AppBskyGraphGetMutes.Response> {
        return this._client.call("app.bsky.graph.getMutes", params, undefined, opts);
    }

    getLists(
        params?: AppBskyGraphGetLists.QueryParams,
        opts?: AppBskyGraphGetLists.CallOptions,
    ): Promise<AppBskyGraphGetLists.Response> {
        return this._client.call("app.bsky.graph.getLists", params, undefined, opts);
    }

    getListMutes(
        params?: AppBskyGraphGetListMutes.QueryParams,
        opts?: AppBskyGraphGetListMutes.CallOptions,
    ): Promise<AppBskyGraphGetListMutes.Response> {
        return this._client.call("app.bsky.graph.getListMutes", params, undefined, opts);
    }

    getListBlocks(
        params?: AppBskyGraphGetListBlocks.QueryParams,
        opts?: AppBskyGraphGetListBlocks.CallOptions,
    ): Promise<AppBskyGraphGetListBlocks.Response> {
        return this._client.call("app.bsky.graph.getListBlocks", params, undefined, opts);
    }

    getList(
        params?: AppBskyGraphGetList.QueryParams,
        opts?: AppBskyGraphGetList.CallOptions,
    ): Promise<AppBskyGraphGetList.Response> {
        return this._client.call("app.bsky.graph.getList", params, undefined, opts);
    }

    getKnownFollowers(
        params?: AppBskyGraphGetKnownFollowers.QueryParams,
        opts?: AppBskyGraphGetKnownFollowers.CallOptions,
    ): Promise<AppBskyGraphGetKnownFollowers.Response> {
        return this._client.call("app.bsky.graph.getKnownFollowers", params, undefined, opts);
    }

    getFollows(
        params?: AppBskyGraphGetFollows.QueryParams,
        opts?: AppBskyGraphGetFollows.CallOptions,
    ): Promise<AppBskyGraphGetFollows.Response> {
        return this._client.call("app.bsky.graph.getFollows", params, undefined, opts);
    }

    getFollowers(
        params?: AppBskyGraphGetFollowers.QueryParams,
        opts?: AppBskyGraphGetFollowers.CallOptions,
    ): Promise<AppBskyGraphGetFollowers.Response> {
        return this._client.call("app.bsky.graph.getFollowers", params, undefined, opts);
    }

    getBlocks(
        params?: AppBskyGraphGetBlocks.QueryParams,
        opts?: AppBskyGraphGetBlocks.CallOptions,
    ): Promise<AppBskyGraphGetBlocks.Response> {
        return this._client.call("app.bsky.graph.getBlocks", params, undefined, opts);
    }

    getActorStarterPacks(
        params?: AppBskyGraphGetActorStarterPacks.QueryParams,
        opts?: AppBskyGraphGetActorStarterPacks.CallOptions,
    ): Promise<AppBskyGraphGetActorStarterPacks.Response> {
        return this._client.call("app.bsky.graph.getActorStarterPacks", params, undefined, opts);
    }
}

export class StarterpackRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyGraphStarterpack.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.graph.starterpack",
            ...params,
        });
        return res.data;
    }

    async get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphStarterpack.Record;
    }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.graph.starterpack",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyGraphStarterpack.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.graph.starterpack";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.graph.starterpack", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.graph.starterpack", ...params },
            { headers },
        );
    }
}

export class ListitemRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyGraphListitem.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.graph.listitem",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyGraphListitem.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.graph.listitem",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyGraphListitem.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.graph.listitem";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.graph.listitem", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.graph.listitem", ...params },
            { headers },
        );
    }
}

export class ListblockRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyGraphListblock.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.graph.listblock",
            ...params,
        });
        return res.data;
    }

    async get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">): Promise<{
        uri: string;
        cid: string;
        value: AppBskyGraphListblock.Record;
    }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.graph.listblock",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyGraphListblock.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.graph.listblock";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.graph.listblock", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.graph.listblock", ...params },
            { headers },
        );
    }
}

export class ListRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyGraphList.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.graph.list",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyGraphList.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.graph.list",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyGraphList.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.graph.list";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.graph.list", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.graph.list", ...params },
            { headers },
        );
    }
}

export class FollowRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyGraphFollow.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.graph.follow",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyGraphFollow.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.graph.follow",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyGraphFollow.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.graph.follow";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.graph.follow", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.graph.follow", ...params },
            { headers },
        );
    }
}

export class BlockRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyGraphBlock.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.graph.block",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyGraphBlock.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.graph.block",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyGraphBlock.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.graph.block";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.graph.block", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.graph.block", ...params },
            { headers },
        );
    }
}

export class AppBskyFeedNS {
    _client: XrpcClient;
    threadgate: ThreadgateRecord;
    repost: RepostRecord;
    postgate: PostgateRecord;
    post: PostRecord;
    like: LikeRecord;
    generator: GeneratorRecord;

    constructor(client: XrpcClient) {
        this._client = client;
        this.threadgate = new ThreadgateRecord(client);
        this.repost = new RepostRecord(client);
        this.postgate = new PostgateRecord(client);
        this.post = new PostRecord(client);
        this.like = new LikeRecord(client);
        this.generator = new GeneratorRecord(client);
    }

    sendInteractions(
        data?: AppBskyFeedSendInteractions.InputSchema,
        opts?: AppBskyFeedSendInteractions.CallOptions,
    ): Promise<AppBskyFeedSendInteractions.Response> {
        return this._client.call("app.bsky.feed.sendInteractions", opts?.qp, data, opts);
    }

    searchPosts(
        params?: AppBskyFeedSearchPosts.QueryParams,
        opts?: AppBskyFeedSearchPosts.CallOptions,
    ): Promise<AppBskyFeedSearchPosts.Response> {
        return this._client
            .call("app.bsky.feed.searchPosts", params, undefined, opts)
            .catch((e) => {
                throw AppBskyFeedSearchPosts.toKnownErr(e);
            });
    }

    getTimeline(
        params?: AppBskyFeedGetTimeline.QueryParams,
        opts?: AppBskyFeedGetTimeline.CallOptions,
    ): Promise<AppBskyFeedGetTimeline.Response> {
        return this._client.call("app.bsky.feed.getTimeline", params, undefined, opts);
    }

    getSuggestedFeeds(
        params?: AppBskyFeedGetSuggestedFeeds.QueryParams,
        opts?: AppBskyFeedGetSuggestedFeeds.CallOptions,
    ): Promise<AppBskyFeedGetSuggestedFeeds.Response> {
        return this._client.call("app.bsky.feed.getSuggestedFeeds", params, undefined, opts);
    }

    getRepostedBy(
        params?: AppBskyFeedGetRepostedBy.QueryParams,
        opts?: AppBskyFeedGetRepostedBy.CallOptions,
    ): Promise<AppBskyFeedGetRepostedBy.Response> {
        return this._client.call("app.bsky.feed.getRepostedBy", params, undefined, opts);
    }

    getQuotes(
        params?: AppBskyFeedGetQuotes.QueryParams,
        opts?: AppBskyFeedGetQuotes.CallOptions,
    ): Promise<AppBskyFeedGetQuotes.Response> {
        return this._client.call("app.bsky.feed.getQuotes", params, undefined, opts);
    }

    getPosts(
        params?: AppBskyFeedGetPosts.QueryParams,
        opts?: AppBskyFeedGetPosts.CallOptions,
    ): Promise<AppBskyFeedGetPosts.Response> {
        return this._client.call("app.bsky.feed.getPosts", params, undefined, opts);
    }

    getPostThread(
        params?: AppBskyFeedGetPostThread.QueryParams,
        opts?: AppBskyFeedGetPostThread.CallOptions,
    ): Promise<AppBskyFeedGetPostThread.Response> {
        return this._client
            .call("app.bsky.feed.getPostThread", params, undefined, opts)
            .catch((e) => {
                throw AppBskyFeedGetPostThread.toKnownErr(e);
            });
    }

    getListFeed(
        params?: AppBskyFeedGetListFeed.QueryParams,
        opts?: AppBskyFeedGetListFeed.CallOptions,
    ): Promise<AppBskyFeedGetListFeed.Response> {
        return this._client
            .call("app.bsky.feed.getListFeed", params, undefined, opts)
            .catch((e) => {
                throw AppBskyFeedGetListFeed.toKnownErr(e);
            });
    }

    getLikes(
        params?: AppBskyFeedGetLikes.QueryParams,
        opts?: AppBskyFeedGetLikes.CallOptions,
    ): Promise<AppBskyFeedGetLikes.Response> {
        return this._client.call("app.bsky.feed.getLikes", params, undefined, opts);
    }

    getFeedSkeleton(
        params?: AppBskyFeedGetFeedSkeleton.QueryParams,
        opts?: AppBskyFeedGetFeedSkeleton.CallOptions,
    ): Promise<AppBskyFeedGetFeedSkeleton.Response> {
        return this._client
            .call("app.bsky.feed.getFeedSkeleton", params, undefined, opts)
            .catch((e) => {
                throw AppBskyFeedGetFeedSkeleton.toKnownErr(e);
            });
    }

    getFeedGenerators(
        params?: AppBskyFeedGetFeedGenerators.QueryParams,
        opts?: AppBskyFeedGetFeedGenerators.CallOptions,
    ): Promise<AppBskyFeedGetFeedGenerators.Response> {
        return this._client.call("app.bsky.feed.getFeedGenerators", params, undefined, opts);
    }

    getFeedGenerator(
        params?: AppBskyFeedGetFeedGenerator.QueryParams,
        opts?: AppBskyFeedGetFeedGenerator.CallOptions,
    ): Promise<AppBskyFeedGetFeedGenerator.Response> {
        return this._client.call("app.bsky.feed.getFeedGenerator", params, undefined, opts);
    }

    getFeed(
        params?: AppBskyFeedGetFeed.QueryParams,
        opts?: AppBskyFeedGetFeed.CallOptions,
    ): Promise<AppBskyFeedGetFeed.Response> {
        return this._client.call("app.bsky.feed.getFeed", params, undefined, opts).catch((e) => {
            throw AppBskyFeedGetFeed.toKnownErr(e);
        });
    }

    getAuthorFeed(
        params?: AppBskyFeedGetAuthorFeed.QueryParams,
        opts?: AppBskyFeedGetAuthorFeed.CallOptions,
    ): Promise<AppBskyFeedGetAuthorFeed.Response> {
        return this._client
            .call("app.bsky.feed.getAuthorFeed", params, undefined, opts)
            .catch((e) => {
                throw AppBskyFeedGetAuthorFeed.toKnownErr(e);
            });
    }

    getActorLikes(
        params?: AppBskyFeedGetActorLikes.QueryParams,
        opts?: AppBskyFeedGetActorLikes.CallOptions,
    ): Promise<AppBskyFeedGetActorLikes.Response> {
        return this._client
            .call("app.bsky.feed.getActorLikes", params, undefined, opts)
            .catch((e) => {
                throw AppBskyFeedGetActorLikes.toKnownErr(e);
            });
    }

    getActorFeeds(
        params?: AppBskyFeedGetActorFeeds.QueryParams,
        opts?: AppBskyFeedGetActorFeeds.CallOptions,
    ): Promise<AppBskyFeedGetActorFeeds.Response> {
        return this._client.call("app.bsky.feed.getActorFeeds", params, undefined, opts);
    }

    describeFeedGenerator(
        params?: AppBskyFeedDescribeFeedGenerator.QueryParams,
        opts?: AppBskyFeedDescribeFeedGenerator.CallOptions,
    ): Promise<AppBskyFeedDescribeFeedGenerator.Response> {
        return this._client.call("app.bsky.feed.describeFeedGenerator", params, undefined, opts);
    }
}

export class ThreadgateRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyFeedThreadgate.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.threadgate",
            ...params,
        });
        return res.data;
    }

    async get(params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">): Promise<{
        uri: string;
        cid: string;
        value: AppBskyFeedThreadgate.Record;
    }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.threadgate",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyFeedThreadgate.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.feed.threadgate";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.feed.threadgate", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.feed.threadgate", ...params },
            { headers },
        );
    }
}

export class RepostRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyFeedRepost.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.repost",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyFeedRepost.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.repost",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyFeedRepost.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.feed.repost";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.feed.repost", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.feed.repost", ...params },
            { headers },
        );
    }
}

export class PostgateRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyFeedPostgate.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.postgate",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyFeedPostgate.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.postgate",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyFeedPostgate.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.feed.postgate";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.feed.postgate", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.feed.postgate", ...params },
            { headers },
        );
    }
}

export class PostRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyFeedPost.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.post",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyFeedPost.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.post",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyFeedPost.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.feed.post";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.feed.post", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.feed.post", ...params },
            { headers },
        );
    }
}

export class LikeRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyFeedLike.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.like",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyFeedLike.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.like",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyFeedLike.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.feed.like";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.feed.like", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.feed.like", ...params },
            { headers },
        );
    }
}

export class GeneratorRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyFeedGenerator.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.generator",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyFeedGenerator.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.generator",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyFeedGenerator.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.feed.generator";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.feed.generator", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.feed.generator", ...params },
            { headers },
        );
    }
}

export class AppBskyEmbedNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }
}

export class AppBskyActorNS {
    _client: XrpcClient;
    profile: ProfileRecord;

    constructor(client: XrpcClient) {
        this._client = client;
        this.profile = new ProfileRecord(client);
    }

    searchActorsTypeahead(
        params?: AppBskyActorSearchActorsTypeahead.QueryParams,
        opts?: AppBskyActorSearchActorsTypeahead.CallOptions,
    ): Promise<AppBskyActorSearchActorsTypeahead.Response> {
        return this._client.call("app.bsky.actor.searchActorsTypeahead", params, undefined, opts);
    }

    searchActors(
        params?: AppBskyActorSearchActors.QueryParams,
        opts?: AppBskyActorSearchActors.CallOptions,
    ): Promise<AppBskyActorSearchActors.Response> {
        return this._client.call("app.bsky.actor.searchActors", params, undefined, opts);
    }

    putPreferences(
        data?: AppBskyActorPutPreferences.InputSchema,
        opts?: AppBskyActorPutPreferences.CallOptions,
    ): Promise<AppBskyActorPutPreferences.Response> {
        return this._client.call("app.bsky.actor.putPreferences", opts?.qp, data, opts);
    }

    getSuggestions(
        params?: AppBskyActorGetSuggestions.QueryParams,
        opts?: AppBskyActorGetSuggestions.CallOptions,
    ): Promise<AppBskyActorGetSuggestions.Response> {
        return this._client.call("app.bsky.actor.getSuggestions", params, undefined, opts);
    }

    getProfiles(
        params?: AppBskyActorGetProfiles.QueryParams,
        opts?: AppBskyActorGetProfiles.CallOptions,
    ): Promise<AppBskyActorGetProfiles.Response> {
        return this._client.call("app.bsky.actor.getProfiles", params, undefined, opts);
    }

    getProfile(
        params?: AppBskyActorGetProfile.QueryParams,
        opts?: AppBskyActorGetProfile.CallOptions,
    ): Promise<AppBskyActorGetProfile.Response> {
        return this._client.call("app.bsky.actor.getProfile", params, undefined, opts);
    }

    getPreferences(
        params?: AppBskyActorGetPreferences.QueryParams,
        opts?: AppBskyActorGetPreferences.CallOptions,
    ): Promise<AppBskyActorGetPreferences.Response> {
        return this._client.call("app.bsky.actor.getPreferences", params, undefined, opts);
    }
}

export class ProfileRecord {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    async list(params: Omit<ComAtprotoRepoListRecords.QueryParams, "collection">): Promise<{
        cursor?: string;
        records: { uri: string; value: AppBskyActorProfile.Record }[];
    }> {
        const res = await this._client.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.actor.profile",
            ...params,
        });
        return res.data;
    }

    async get(
        params: Omit<ComAtprotoRepoGetRecord.QueryParams, "collection">,
    ): Promise<{ uri: string; cid: string; value: AppBskyActorProfile.Record }> {
        const res = await this._client.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.actor.profile",
            ...params,
        });
        return res.data;
    }

    async create(
        params: Omit<ComAtprotoRepoCreateRecord.InputSchema, "collection" | "record">,
        record: AppBskyActorProfile.Record,
        headers?: Record<string, string>,
    ): Promise<{ uri: string; cid: string }> {
        record.$type = "app.bsky.actor.profile";
        const res = await this._client.call(
            "com.atproto.repo.createRecord",
            undefined,
            { collection: "app.bsky.actor.profile", rkey: "self", ...params, record },
            { encoding: "application/json", headers },
        );
        return res.data;
    }

    async delete(
        params: Omit<ComAtprotoRepoDeleteRecord.InputSchema, "collection">,
        headers?: Record<string, string>,
    ): Promise<void> {
        await this._client.call(
            "com.atproto.repo.deleteRecord",
            undefined,
            { collection: "app.bsky.actor.profile", ...params },
            { headers },
        );
    }
}

export class AppBskyNotificationNS {
    _client: XrpcClient;

    constructor(client: XrpcClient) {
        this._client = client;
    }

    updateSeen(
        data?: AppBskyNotificationUpdateSeen.InputSchema,
        opts?: AppBskyNotificationUpdateSeen.CallOptions,
    ): Promise<AppBskyNotificationUpdateSeen.Response> {
        return this._client.call("app.bsky.notification.updateSeen", opts?.qp, data, opts);
    }

    registerPush(
        data?: AppBskyNotificationRegisterPush.InputSchema,
        opts?: AppBskyNotificationRegisterPush.CallOptions,
    ): Promise<AppBskyNotificationRegisterPush.Response> {
        return this._client.call("app.bsky.notification.registerPush", opts?.qp, data, opts);
    }

    putPreferences(
        data?: AppBskyNotificationPutPreferences.InputSchema,
        opts?: AppBskyNotificationPutPreferences.CallOptions,
    ): Promise<AppBskyNotificationPutPreferences.Response> {
        return this._client.call("app.bsky.notification.putPreferences", opts?.qp, data, opts);
    }

    listNotifications(
        params?: AppBskyNotificationListNotifications.QueryParams,
        opts?: AppBskyNotificationListNotifications.CallOptions,
    ): Promise<AppBskyNotificationListNotifications.Response> {
        return this._client.call(
            "app.bsky.notification.listNotifications",
            params,
            undefined,
            opts,
        );
    }

    getUnreadCount(
        params?: AppBskyNotificationGetUnreadCount.QueryParams,
        opts?: AppBskyNotificationGetUnreadCount.CallOptions,
    ): Promise<AppBskyNotificationGetUnreadCount.Response> {
        return this._client.call("app.bsky.notification.getUnreadCount", params, undefined, opts);
    }
}
