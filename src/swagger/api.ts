/**
 * @gtm/service.user
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { interfaces } from 'inversify';
import * as libclient from '@gtm/lib.client';

/* tslint:disable:no-unused-variable */
export class AccountView {
    'balance': number;
    'bonus': number;
}

export class AttachmentView {
    /**
    * HTML Content-Type: image/png, image/jpeg, image/gif,..  This will be return to browser client to correctly load & show the image  
    */
    'media': string;
    /**
    * Image raw/binary Content-Data will be stramming to browser client 
    */
    'data': Binary;
}

export class Binary {
    'sUBTYPEDEFAULT': number;
    'sUBTYPEFUNCTION': number;
    'sUBTYPEBYTEARRAY': number;
    'sUBTYPEUUIDOLD': number;
    'sUBTYPEUUID': number;
    'sUBTYPEMD5': number;
    'sUBTYPEUSERDEFINED': number;
    'buffer': string;
    'subType': number;
}

export class JwtToken {
    /**
    * User's display name 
    */
    'name': string;
    'session': string;
    'user': string;
    /**
    * List of roles for quicky checking 
    */
    'roles': MapOfBoolean;
    /**
    * List of scope or null is all scope (*) 
    */
    'scope': MapOfBoolean;
    /**
    * Valid until 
    */
    'expires': number;
}

export class LocationView {
    /**
    * longitude 
    */
    'x': number;
    /**
    * latitude 
    */
    'y': number;
}

export class MAvatarView {
    'media': string;
    'data': string;
}

export class MProfileView {
    'name': string;
    'gender': string;
    'birthday': number;
    'address': string;
    'localtion': LocationView;
    'identityCard': string;
    'phone': string;
    'job': string;
    'bankRate': number;
    'note': string;
    'infos': string;
    'houseHolder': string;
}

export class MUserView {
    'id': string;
    'name': string;
    'phone': string;
    'email': string;
    'houseHolder': any;
}

export class MapOfBoolean extends null<String, boolean> {
}

export class MessageDetailView {
    'id': string;
    'userId': string;
    'userName': string;
    'toUserId': string;
    'toUserName': string;
    'content': string;
    'delivered': number;
    'announced': boolean;
    'created': number;
    'updated': number;
}

export class MessageDetailViewApp {
    'userId': string;
    'userName': string;
    'messageDetailView': Array<MessageDetailView>;
}

export class MessageEntity {
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
    'announced': boolean;
}

export class MessageView {
    'userId': string;
    'toUserId': string;
    'content': string;
    'delivered': number;
    'announced': boolean;
}

export class MessageViewWithPagination {
    'messages': Array<MessageDetailView>;
    'totalItems': number;
}

export class MessageViewWithPaginationAnUserApp {
    'userId': string;
    'userName': string;
    'messages': Array<MessageDetailView>;
}

export class MessageViewWithPaginationApp {
    'messages': Array<MessageDetailViewApp>;
}

export class ProfileView {
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham 
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/.. 
    */
    'provider': string;
    /**
    * Link to [role] table 
    */
    'roles': Array<UserRole>;
    /**
    * user account 
    */
    'account': UserAccount;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process 
    */
    'active': boolean;
    'status': UserStatus;
    /**
    * UTC tick only date without time component 
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,.. 
    */
    'language': string;
    /**
    * male/female 
    */
    'gender': string;
    /**
    * +/- UTC time 
    */
    'timezone': number;
    /**
    * First Login 
    */
    'isFirstLogin': boolean;
}

export class ProviderSession {
    'name': string;
    'accessToken': string;
    'refreshToken': string;
    'expiresIn': number;
    'tokenType': string;
}

export class RoleDetailView {
    'id': string;
    'code': string;
    'scope': string;
    'status': RoleStatus;
    'created': number;
    'updated': number;
}

export class RoleStatus {
}

export class RoleType {
}

export class RoleView {
    /**
    * role code 
    */
    'code': string;
    /**
    * role scope 
    */
    'scope': string;
    /**
    * role status 
    */
    'status': RoleStatus;
}

export class RoleViewWithPagination {
    'roles': Array<RoleDetailView>;
    'totalItems': number;
}

export class SessionView {
    'id': string;
    'userId': string;
    'code': string;
    'name': string;
    'roles': Array<string>;
    'scope': string;
    'expiresIn': number;
    'provider': ProviderSession;
    'created': number;
    'updated': number;
}

export class SessionViewWithPagination {
    'sessions': Array<SessionView>;
    'totalItems': number;
}

export class UserAccount {
    'balance': number;
    'bonus': number;
}

export class UserAccountView {
    'balance': number;
    'bonus': number;
}

export class UserEntity {
    'id': any;
    'created': number;
    'updated': number;
    'deleted': number;
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham 
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/.. 
    */
    'provider': string;
    /**
    * Link to [role] table 
    */
    'roles': Array<UserRole>;
    /**
    * user account 
    */
    'account': UserAccount;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process 
    */
    'active': boolean;
    'status': UserStatus;
    /**
    * UTC tick only date without time component 
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,.. 
    */
    'language': string;
    /**
    * male/female 
    */
    'gender': string;
    /**
    * +/- UTC time 
    */
    'timezone': number;
    /**
    * First Login 
    */
    'isFirstLogin': boolean;
    /**
    * With 3 sub-dcouments:  - user.profiles.google: Google profile (auto created by OAuth2 by Google)  - user.profiles.facebook: FaceBook profile (auto created by OAuth2 by Google)  - user.profiles.app: is an application specific profile, need to define a view: ScProfileView { balance: number; bonus: number; LaiXuatMacDinh: number; .. }
    */
    'profiles': any;
    /**
    * The OAuth2 authentication process should auto  load up the default user avatar at 1st user login  
    */
    'avatar': AttachmentView;
}

export class UserRole {
    'id': any;
    'code': string;
}

export class UserRoleView {
    'userId': string;
    'roleType': RoleType;
}

export class UserStatus {
}

export class UserUpdateView {
    'name': string;
    'phone': string;
    'birthday': number;
    'email': string;
    'gender': string;
    'status': UserStatus;
    'role': Array<UserRole>;
    'address': string;
}

export class UserViewDetails {
    /**
    * Google/FB profile id
    */
    'code': string;
    /**
    * Google/FB display name, ex: Thanh Pham 
    */
    'name': string;
    /**
    * OAuth2 provider: google/facebook/builtin/.. 
    */
    'provider': string;
    /**
    * Link to [role] table 
    */
    'roles': Array<UserRole>;
    'account': AccountView;
    /**
    * [true] - active user  [false] - inactive user  [<null>] - is un-approved user state with limited access to the system, this state is auto created by OAuth2 process 
    */
    'active': boolean;
    'status': UserStatus;
    /**
    * UTC tick only date without time component 
    */
    'birthday': number;
    'address': string;
    'location': LocationView;
    'phone': string;
    'email': string;
    /**
    * en, vn,.. 
    */
    'language': string;
    /**
    * male/female 
    */
    'gender': string;
    /**
    * +/- UTC time 
    */
    'timezone': number;
    /**
    * First Login 
    */
    'isFirstLogin': boolean;
    /**
    * With 3 sub-dcouments:  - user.profiles.google: Google profile (auto created by OAuth2 by Google)  - user.profiles.facebook: FaceBook profile (auto created by OAuth2 by Google)  - user.profiles.app: is an application specific profile, need to define a view: ScProfileView { balance: number; bonus: number; LaiXuatMacDinh: number; .. }
    */
    'profiles': any;
    /**
    * The OAuth2 authentication process should auto  load up the default user avatar at 1st user login  
    */
    'avatar': AttachmentView;
    'id': string;
    'created': number;
    'updated': number;
}

export class UserViewWithPagination {
    'users': Array<UserViewDetails>;
    'totalItems': number;
}


export enum MessageApiApiKeys {
}

export class MessageApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Create New Message 
     * @param messageView 
     */
    public createEntity (messageView: MessageView) : Promise<libclient.ApiResponse<MessageEntity>> {

        // verify required parameter 'messageView' is not null or undefined
        if (messageView === null || messageView === undefined) {
            throw new Error('Required parameter messageView was null or undefined when calling createEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageEntity>('POST', '/api/user/v1/Message',
            queryParameters, headerParams, formParams, isFile, false, messageView
        );
    }

    /**
     * Delete Message 
     * @param id 
     */
    public deleteEntity (id: string) : Promise<libclient.ApiResponse<any>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<any>('DELETE', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Messages 
     * @param from 
     * @param to 
     * @param pageNumber 
     * @param itemCount 
     * @param sortName 
     * @param sortType 
     */
    public getEntities (from?: string, to?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number) : Promise<libclient.ApiResponse<MessageViewWithPagination>> {
        let queryParameters: any = {};
        if (from !== undefined) queryParameters['from'] = from;
        if (to !== undefined) queryParameters['to'] = to;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined) queryParameters['sortName'] = sortName;
        if (sortType !== undefined) queryParameters['sortType'] = sortType;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageViewWithPagination>('GET', '/api/user/v1/Message',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Message by Id 
     * @param id 
     */
    public getEntity (id: string) : Promise<libclient.ApiResponse<MessageEntity>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageEntity>('GET', '/api/user/v1/Message/getbyid/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get List Messages For App
     */
    public getListMessageForApp () : Promise<libclient.ApiResponse<MessageViewWithPaginationApp>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageViewWithPaginationApp>('GET', '/api/user/v1/Message/getforapp',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get List Messages with an user for App
     * @param userIdToGetMessage 
     */
    public getListMessageOfUser (userIdToGetMessage: string) : Promise<libclient.ApiResponse<MessageViewWithPaginationAnUserApp>> {

        // verify required parameter 'userIdToGetMessage' is not null or undefined
        if (userIdToGetMessage === null || userIdToGetMessage === undefined) {
            throw new Error('Required parameter userIdToGetMessage was null or undefined when calling getListMessageOfUser.');
        }
        let queryParameters: any = {};
        if (userIdToGetMessage !== undefined) queryParameters['userIdToGetMessage'] = userIdToGetMessage;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageViewWithPaginationAnUserApp>('GET', '/api/user/v1/Message/getforanuserapp',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Messages to notification
     */
    public getMessageToNotification () : Promise<libclient.ApiResponse<MessageViewWithPagination>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageViewWithPagination>('GET', '/api/user/v1/Message/get-message-to-notification',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Update Message 
     * @param id 
     * @param messageView 
     */
    public updateEntity (id: string, messageView: MessageView) : Promise<libclient.ApiResponse<MessageEntity>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateEntity.');
        }

        // verify required parameter 'messageView' is not null or undefined
        if (messageView === null || messageView === undefined) {
            throw new Error('Required parameter messageView was null or undefined when calling updateEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MessageEntity>('PUT', '/api/user/v1/Message/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, messageView
        );
    }
}
export enum RoleApiApiKeys {
}

export class RoleApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Create New Role 
     * @param roleView 
     */
    public createEntity (roleView?: RoleView) : Promise<libclient.ApiResponse<RoleDetailView>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<RoleDetailView>('POST', '/api/user/v1/role',
            queryParameters, headerParams, formParams, isFile, false, roleView
        );
    }

    /**
     * Delete Role 
     * @param id 
     */
    public deleteEntity (id: string) : Promise<libclient.ApiResponse<string>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<string>('POST', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Roles 
     * @param query 
     * @param pageNumber 
     * @param itemCount 
     * @param sortName 
     * @param sortType 
     */
    public getEntities (query?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number) : Promise<libclient.ApiResponse<RoleViewWithPagination>> {
        let queryParameters: any = {};
        if (query !== undefined) queryParameters['query'] = query;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined) queryParameters['sortName'] = sortName;
        if (sortType !== undefined) queryParameters['sortType'] = sortType;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<RoleViewWithPagination>('GET', '/api/user/v1/role',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get Role by Id 
     * @param id 
     */
    public getEntity (id: string) : Promise<libclient.ApiResponse<RoleDetailView>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getEntity.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<RoleDetailView>('GET', '/api/user/v1/role/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }
}
export enum SessionApiApiKeys {
}

export class SessionApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Check current session info 
     */
    public getCurrent () : Promise<libclient.ApiResponse<JwtToken>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<JwtToken>('GET', '/api/user/v1/session/current',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get sessions with pagination 
     * @param userId 
     * @param pageNumber 
     * @param itemCount 
     * @param sortName 
     * @param sortType 
     */
    public getEntities (userId?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number) : Promise<libclient.ApiResponse<SessionViewWithPagination>> {
        let queryParameters: any = {};
        if (userId !== undefined) queryParameters['userId'] = userId;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined) queryParameters['sortName'] = sortName;
        if (sortType !== undefined) queryParameters['sortType'] = sortType;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<SessionViewWithPagination>('GET', '/api/user/v1/session/entities',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }
}
export enum SystemApiApiKeys {
}

export class SystemApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Check loggedin status 
     */
    public getLoggedin () : Promise<libclient.ApiResponse<boolean>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<boolean>('GET', '/api/user/v1/system/loggedin',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get current system version info 
     */
    public getVersion () : Promise<libclient.ApiResponse<string>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<string>('POST', '/api/user/v1/system/version',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }
}
export enum UserApiApiKeys {
}

export class UserApi extends libclient.ApiClient {
    constructor(basePath?: string, accessToken?: string) {
        super(basePath, accessToken);
    }

    /**
     * Create or update User Role 
     * @param userRoleView 
     */
    public createOrUpdateUserRole (userRoleView: UserRoleView) : Promise<libclient.ApiResponse<ProfileView>> {

        // verify required parameter 'userRoleView' is not null or undefined
        if (userRoleView === null || userRoleView === undefined) {
            throw new Error('Required parameter userRoleView was null or undefined when calling createOrUpdateUserRole.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('POST', '/api/user/v1/user/create-or-update-role',
            queryParameters, headerParams, formParams, isFile, false, userRoleView
        );
    }

    /**
     * Create or update User Role 
     * @param roleType 
     */
    public createOrUpdateUserRoleMobile (roleType: number) : Promise<libclient.ApiResponse<ProfileView>> {

        // verify required parameter 'roleType' is not null or undefined
        if (roleType === null || roleType === undefined) {
            throw new Error('Required parameter roleType was null or undefined when calling createOrUpdateUserRoleMobile.');
        }
        let queryParameters: any = {};
        if (roleType !== undefined) queryParameters['roleType'] = roleType;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('POST', '/api/user/v1/user/create-or-update-role-mobile',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * 
     * @param find 
     */
    public findUser (find: string) : Promise<libclient.ApiResponse<Array<MUserView>>> {

        // verify required parameter 'find' is not null or undefined
        if (find === null || find === undefined) {
            throw new Error('Required parameter find was null or undefined when calling findUser.');
        }
        let queryParameters: any = {};
        if (find !== undefined) queryParameters['find'] = find;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<MUserView>>('GET', '/api/user/v1/user/find-user',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get user by Id 
     * @param id 
     */
    public getById (id: string) : Promise<libclient.ApiResponse<MUserView>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getById.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<MUserView>('GET', '/api/user/v1/user/getById/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get user details by Id 
     * @param id 
     */
    public getDetailViewById (id: string) : Promise<libclient.ApiResponse<UserViewDetails>> {

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getDetailViewById.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserViewDetails>('GET', '/api/user/v1/user/details/{id}'.replace('{' + 'id' + '}', String(id)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get users with pagination 
     * @param status 
     * @param userId 
     * @param pageNumber 
     * @param itemCount 
     * @param sortName 
     * @param sortType 
     */
    public getEntities (status?: string, userId?: string, pageNumber?: number, itemCount?: number, sortName?: string, sortType?: number) : Promise<libclient.ApiResponse<UserViewWithPagination>> {
        let queryParameters: any = {};
        if (status !== undefined) queryParameters['status'] = status;
        if (userId !== undefined) queryParameters['userId'] = userId;
        if (pageNumber !== undefined) queryParameters['pageNumber'] = pageNumber;
        if (itemCount !== undefined) queryParameters['itemCount'] = itemCount;
        if (sortName !== undefined) queryParameters['sortName'] = sortName;
        if (sortType !== undefined) queryParameters['sortType'] = sortType;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserViewWithPagination>('GET', '/api/user/v1/user/entities',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * 
     */
    public getProfileCurrent () : Promise<libclient.ApiResponse<ProfileView>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('GET', '/api/user/v1/user/profile',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get user account 
     * @param userId 
     */
    public getUserAccount (userId: string) : Promise<libclient.ApiResponse<UserAccount>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAccount.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserAccount>('GET', '/api/user/v1/user/get-user-account/{userId}'.replace('{' + 'userId' + '}', String(userId)),
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * 
     * @param userName 
     */
    public getUserByName (userName: string) : Promise<libclient.ApiResponse<Array<MUserView>>> {

        // verify required parameter 'userName' is not null or undefined
        if (userName === null || userName === undefined) {
            throw new Error('Required parameter userName was null or undefined when calling getUserByName.');
        }
        let queryParameters: any = {};
        if (userName !== undefined) queryParameters['userName'] = userName;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<MUserView>>('GET', '/api/user/v1/user/get-by-user-name',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Get all user lite 
     */
    public getUserLite () : Promise<libclient.ApiResponse<Array<MUserView>>> {
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<Array<MUserView>>('GET', '/api/user/v1/user/get-user-lite',
            queryParameters, headerParams, formParams, isFile, false, undefined
        );
    }

    /**
     * Update user with profiles 
     * @param avatar 
     */
    public updateAvatar (avatar: MAvatarView) : Promise<libclient.ApiResponse<UserEntity>> {

        // verify required parameter 'avatar' is not null or undefined
        if (avatar === null || avatar === undefined) {
            throw new Error('Required parameter avatar was null or undefined when calling updateAvatar.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserEntity>('POST', '/api/user/v1/user/update-avatar',
            queryParameters, headerParams, formParams, isFile, false, avatar
        );
    }

    /**
     * 
     * @param profileView 
     */
    public updateProfileCurrent (profileView: ProfileView) : Promise<libclient.ApiResponse<ProfileView>> {

        // verify required parameter 'profileView' is not null or undefined
        if (profileView === null || profileView === undefined) {
            throw new Error('Required parameter profileView was null or undefined when calling updateProfileCurrent.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<ProfileView>('POST', '/api/user/v1/user/profile',
            queryParameters, headerParams, formParams, isFile, false, profileView
        );
    }

    /**
     * Update user account 
     * @param userId 
     * @param userAccountView 
     * @param type 
     */
    public updateUserAccount (userId: string, userAccountView: UserAccountView, type?: string) : Promise<libclient.ApiResponse<UserAccount>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserAccount.');
        }

        // verify required parameter 'userAccountView' is not null or undefined
        if (userAccountView === null || userAccountView === undefined) {
            throw new Error('Required parameter userAccountView was null or undefined when calling updateUserAccount.');
        }
        let queryParameters: any = {};
        if (type !== undefined) queryParameters['type'] = type;
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserAccount>('POST', '/api/user/v1/user/update-user-account/{userId}'.replace('{' + 'userId' + '}', String(userId)),
            queryParameters, headerParams, formParams, isFile, false, userAccountView
        );
    }

    /**
     * Update user details 
     * @param userId 
     * @param userDetails 
     */
    public updateUserDetail (userId: string, userDetails: UserUpdateView) : Promise<libclient.ApiResponse<UserEntity>> {

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUserDetail.');
        }

        // verify required parameter 'userDetails' is not null or undefined
        if (userDetails === null || userDetails === undefined) {
            throw new Error('Required parameter userDetails was null or undefined when calling updateUserDetail.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserEntity>('POST', '/api/user/v1/user/update-user-details/{userId}'.replace('{' + 'userId' + '}', String(userId)),
            queryParameters, headerParams, formParams, isFile, false, userDetails
        );
    }

    /**
     * Update user with profiles 
     * @param profile 
     */
    public updateUserProfiles (profile: MProfileView) : Promise<libclient.ApiResponse<UserEntity>> {

        // verify required parameter 'profile' is not null or undefined
        if (profile === null || profile === undefined) {
            throw new Error('Required parameter profile was null or undefined when calling updateUserProfiles.');
        }
        let queryParameters: any = {};
        let headerParams: any = this.defaultHeaders;
        let isFile = false;
        let formParams: any = {};
        return this.execute<UserEntity>('POST', '/api/user/v1/user/update-user-profiles',
            queryParameters, headerParams, formParams, isFile, false, profile
        );
    }
}

export function registerIoc(iocContainer: interfaces.Container, basePath: string, token?: string | (() => string)) {
    libclient.registerApiClient(iocContainer, MessageApi, MessageApi, basePath, token);
    libclient.registerApiClient(iocContainer, RoleApi, RoleApi, basePath, token);
    libclient.registerApiClient(iocContainer, SessionApi, SessionApi, basePath, token);
    libclient.registerApiClient(iocContainer, SystemApi, SystemApi, basePath, token);
    libclient.registerApiClient(iocContainer, UserApi, UserApi, basePath, token);
}
