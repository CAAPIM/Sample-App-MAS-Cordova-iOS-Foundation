/*
 * Copyright (c) 2016 CA, Inc. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 *
 */
/**
* @class MASPluginUser
* @hideconstructor
* @classdesc The main class representing the User Lifecycle Management like login,logout etc.
* <table>
*	<tr bgcolor="#D3D3D3"><th>MASUser Singleton instance</th></tr>
*	<tr><td><i> MASPlugin.MASUser.currentUser(successHandler(theUser),errorHandler(error));</i>//theUser is the singleton here</td></tr>
* </table>
*/
 var MASPluginUser = function(masPluginUser) {
    /**
     * The username of the user
	 * @memberOf MASPluginUser
     * @member {string} userName
	 * @instance
     */
    this.userName = masPluginUser.userName;

    /**
     * The family name of the user
	 * @memberOf MASPluginUser
     * @member {string} familyName
	 * @instance
     */
     this.familyName = masPluginUser.familyName;

    /**
     * The given name of the user
	 * @memberOf MASPluginUser
     * @member {string} givenName
	 * @instance
     */
     this.givenName = masPluginUser.givenName;

    /**
     * The formatted name of the user
	 * @memberOf MASPluginUser
     * @member {string} formattedName
	 * @instance
     */
     this.formattedName = masPluginUser.formattedName;

    /**
     * List of the email addresses of the user
	 * @memberOf MASPluginUser
     * @member {array} emailAddresses
	 * @instance
     */
     this.emailAddresses = masPluginUser.emailAddresses;

    /**
     * List of the phone numbers of the user
	 * @memberOf MASPluginUser
     * @member {array} phoneNumbers
	 * @instance
     */
     this.phoneNumbers = masPluginUser.phoneNumbers;

    /**
     * List of the addresses of the user
	 * @memberOf MASPluginUser
     * @member {array} addresses
	 * @instance
     */
     this.addresses = masPluginUser.addresses;

     /**
     * Returns the base64 string of the user's photo
	 * @memberOf MASPluginUser
     * @member {string} photos
	 * @instance
     */
     this.photos = masPluginUser.photos;

     /**
     * List of the groups the user is a part of
	 * @memberOf MASPluginUser
     * @member {array} groups
	 * @instance
     */
     this.groups = masPluginUser.groups;

     /**
     * Checks if the user is active
	 * @memberOf MASPluginUser
     * @member {boolean} active
	 * @instance
     */
     this.active = masPluginUser.active;

     /**
     * Boolean indicator that specifies whether the MASPluginUser object is the current user.
	 * @memberOf MASPluginUser
	 * @function isCurrentUser
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
     this.isCurrentUser = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "isCurrentUser", []);
     };

    /**
     * Boolean indicator that specifies whether the MASPluginUser object is authenticated
	 * @memberOf MASPluginUser
	 * @function isAuthenticated
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
     this.isAuthenticated = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "isAuthenticated", []);
     };

    /**
     * String accessToken value of the current logged in user.
	 * @memberOf MASPluginUser
	 * @function getAccessToken
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
     this.getAccessToken = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "getAccessToken", []);
     };

	 /**
     * Lists all the attributes of the Current logged in user. The attributes are in the form of a JSON with key:value pairs.
	 * @memberOf MASPluginUser
	 * @function listAttributes
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
     this.listAttributes = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "listAttributes", []);
     };

    /**
     * Boolean indicator that specifies whether the currently authenticated MASPluginUser object has the session locked.
	 * @memberOf MASPluginUser
	 * @function isSessionLocked
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
     this.isSessionLocked = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "isSessionLocked", []);
     };

	/**
     * Locks the current session of the user. The user must log in to use this API.
	 * @memberOf MASPluginUser
	 * @function lockSession
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
    this.lockSession = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "lockSession", []);
    };

    /**
     * Unlocks the current session of the user. The user must log in to use this API.
	 * @memberOf MASPluginUser
	 * @function unlockSession
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
    this.unlockSession = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "unlockSession", []);
    };

    /**
     * Unlocks the current session of the user with a customizable message while unlocking. The user must log in to use this API.
	 * @memberOf MASPluginUser
	 * @function unlockSessionWithMessage
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     * @param {string} message A user defined message that is displyed on the lock screen before asking for PIN/Fingerprint.
     */
    this.unlockSessionWithMessage = function(successHandler, errorHandler, message) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "unlockSessionWithMessage", [message]);
    };

    /**
     * Removes the session lock for the user. Remove session causes all the stored tokens in the device to be wiped-out. The user must log in to use this API.
	 * @memberOf MASPluginUser
	 * @function removeSessionLock
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     */
    this.removeSessionLock = function(successHandler, errorHandler) {
        return Cordova.exec(successHandler, errorHandler, "MASPluginUser", "removeSessionLock", []);
    };

    /**
     * Logs off the user from this app (In case of SSO the user is logged off from other apps too).
	 * @memberOf MASPluginUser
	 * @function logout
	 * @instance
     * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
     * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
     * @param {boolean} force
     * The behavior for different values of force would be<br>
	 * <table>
	 * <tr bgcolor="#D3D3D3"><th>Value</th><th>Description</th>
	 * <tr><td>true</td><td>The  SDK clears local tokens regardless if the logout call to the server is successful or not.</td>
	 * <tr><td>false</td><td>The SDK clears local tokens only if the logout call to the server is successful.</td></tr>
	 * </table>
     *   If no value is provided, then the default value `false` is used. This is for backward compatibility with old logout signature.
     */
    this.logout = function(successHandler, errorHandler, force) {
        return Cordova.exec(function(result) {
            delete MASPluginUser.sharedCurrUser;
            successHandler(result);
        }, errorHandler, "MASPluginUser", "logoutUser", [force]);
    };
 }

///------------------------------------------------------------------------------------------------------------------
/// @name Current User
///------------------------------------------------------------------------------------------------------------------

MASPluginUser.sharedCurrUser;

 /**
 * The authenticated user for the application, if any. Returns null if no authenticated user found.. This is a singleton object. <b>Developers should call this API first in order to use the instance attributes or functions
 * of the MASUser object.</b>
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @example
	<caption>For instance, to access the username field of the logged in user (and to see if the session is locked) you must call this API as follows</caption>

MASPluginUser.currentUser(
	function(result) {
		// Get username of the user
		var username = result.userName;
		// Get Session Locked state
		result.isSessionLocked(
			function(success){
				var isSessionLocked = success;
			},function(error){});

	},function(error) {}
);
 */

 MASPluginUser.currentUser = function(successHandler, errorHandler) {
    Cordova.exec(function(masPluginUser) {
        if (typeof(MASPluginUser.sharedCurrUser === 'undefined')){
            MASPluginUser.sharedCurrUser = new MASPluginUser(masPluginUser);
        }else {
            delete MASPluginUser.sharedCurrUser;
            MASPluginUser.sharedCurrUser = new MASPluginUser(masPluginUser);
        }
        successHandler(MASPluginUser.sharedCurrUser);
    }, errorHandler, "MASPluginUser", "currentUser");
};

 /**
 * Authenticates the user asynchronously using the username and password.
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @param {string} userName username of the user
 * @param {string} password password of the user
 */
 MASPluginUser.loginWithUsernameAndPassword = function(successHandler, errorHandler, username, password) {
    return Cordova.exec(function(result) {
        if (result && typeof(MASPluginUser.sharedCurrUser !== 'undefined')){
            MASPluginUser.currentUser(function(){}, function(){});
         }
        successHandler(result);
    }, errorHandler, "MASPluginUser", "loginWithUsernameAndPassword", [username, password]);
 };

 /**
 * Authenticates a user asynchronously using and id_token
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @param {string} idToken The id_token for the user. Ensure that the id_token is a valid JWT
 * @param {string} tokenType Token type of id_token. <table><tr bgcolor="#D3D3D3"><th>Example</th></tr><tr><td>{`urn:ietf:params:oauth:grant-type:jwt-bearer`}</td></tr></table>
 */
 MASPluginUser.loginWithIdTokenAndTokenType = function(successHandler, errorHandler, idToken, tokenType) {
    return Cordova.exec(function(result) {
        if (result && typeof(MASPluginUser.sharedCurrUser !== 'undefined')){
            MASPluginUser.currentUser(function(){}, function(){});
         }
        successHandler(result);
    }, errorHandler, "MASPluginUser", "loginWithIdTokenAndTokenType", [idToken, tokenType]);
};

 /**
 * Authenticates a user asynchronously using an authorization code and a state(optional) variable
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @param {string} authCode The Authorization code as received from an OAuth server.
 * @param {string} state A state variable for supporting the PKCE validation.
 */
 MASPluginUser.loginWithAuthCode = function(successHandler, errorHandler, authCode, state) {
    return Cordova.exec(function(result) {
        if (result && typeof(MASPluginUser.sharedCurrUser !== 'undefined')){
            MASPluginUser.currentUser(function(){}, function(){});
         }
        successHandler(result);
    }, errorHandler, "MASPluginUser", "loginWithAuthCode", [authCode, state]);
 };

 /**
 * Authenticates the user asynchronously using the MAS native AuthCredential construct that contains username and password.
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @param {string} userName username of the user
 * @param {string} password password of the user
 */
 MASPluginUser.loginWithAuthCredentialsUsernamePassword = function(successHandler, errorHandler, username, password) {
    return Cordova.exec(function(result) {
        if (result && typeof(MASPluginUser.sharedCurrUser !== 'undefined')){
            MASPluginUser.currentUser(function(){}, function(){});
         }
        successHandler(result);
    }, errorHandler, "MASPluginUser", "loginWithAuthCredentialsUsernamePassword", [username, password]);
 };

 /**
 * Authenticates a user asynchronously using the MAS native AuthCredential construct containing a JWT(id_token) and a token type 
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @param {string} jwt The id_token for the user. Ensure that the id_token is a valid JWT
 * @param {string} tokenType Token type of id_token. <table><tr bgcolor="#D3D3D3"><th>Example</th></tr><tr><td>{`urn:ietf:params:oauth:grant-type:jwt-bearer`}</td></tr></table>
 */
 MASPluginUser.loginWithAuthCredentialsJWT = function(successHandler, errorHandler, jwt, tokenType) {
    return Cordova.exec(function(result) {
        if (result && typeof(MASPluginUser.sharedCurrUser !== 'undefined')){
            MASPluginUser.currentUser(function(){}, function(){});
         }
        successHandler(result);
    }, errorHandler, "MASPluginUser", "loginWithAuthCredentialsJWT", [jwt, tokenType]);
 };
 
 /**
 * Authenticates a user asynchronously using the MAS native AuthCredential construct containing an authorization code and a state(optional) variable
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @param {string} authorizationCode The Authorization code as received from an OAuth server.
 * @param {string} state A state variable for supporting the PKCE validation.
 */
 MASPluginUser.loginWithAuthCredentialsAuthCode = function(successHandler, errorHandler, authorizationCode,state) {
    return Cordova.exec(function(result) {
        if (result && typeof(MASPluginUser.sharedCurrUser !== 'undefined')){
            MASPluginUser.currentUser(function(){}, function(){});
         }
        successHandler(result);
    }, errorHandler, "MASPluginUser", "loginWithAuthCredentialsAuthCode", [authorizationCode,state]);
 };

 /**
 * Authenticates a user by launching a Browser which in turn loads a URL (templatized). The URL needed is retrieved from the server endpoint mentioned in the configuration file.
 * @memberOf MASPluginUser
 * @param {successCallbackFunction} successHandler user defined success callback that is invoked on success scenario.
 * @param {errorCallbackFunction} errorHandler user defined error callback that is invoked on failure scenario.
 * @static
 */
 MASPluginUser.initializeBrowserBasedAuthentication = function(successHandler, errorHandler) {
    return Cordova.exec(function(result) {
        if (result && typeof(MASPluginUser.sharedCurrUser !== 'undefined')){
            MASPluginUser.currentUser(function(){}, function(){});
         }
        successHandler(result);
    }, errorHandler, "MASPluginUser", "initializeBrowserBasedAuthentication", []);
 }

module.exports = MASPluginUser;