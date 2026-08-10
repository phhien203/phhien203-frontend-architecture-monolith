import { apiClient } from "@commerceos/shared/api/client";
import type {
	AccountMember,
	AccountPermissionPolicy,
	AuthUser,
} from "@commerceos/shared/domain/commerce/users.types";

export function fetchAccountUsers(accountId: string) {
	return apiClient.get<AccountMember[]>(`/api/accounts/${accountId}/users`);
}

export function fetchAccountUser(accountId: string, userId: string) {
	return apiClient.get<AccountMember>(
		`/api/accounts/${accountId}/users/${userId}`,
	);
}

export function updateAccountUser(
	accountId: string,
	userId: string,
	payload: Partial<AccountMember>,
) {
	return apiClient.patch<AccountMember>(
		`/api/accounts/${accountId}/users/${userId}`,
		payload,
	);
}

export function fetchAccountPermissions(accountId: string) {
	return apiClient.get<AccountPermissionPolicy>(
		`/api/accounts/${accountId}/permissions`,
	);
}

export function updateAccountPermissions(
	accountId: string,
	payload: Partial<AccountPermissionPolicy>,
) {
	return apiClient.patch<AccountPermissionPolicy>(
		`/api/accounts/${accountId}/permissions`,
		payload,
	);
}

export function fetchProfile() {
	return apiClient.get<AuthUser>("/api/me");
}

export function updateProfile(payload: Partial<AuthUser>) {
	return apiClient.patch<AuthUser>("/api/me", payload);
}
