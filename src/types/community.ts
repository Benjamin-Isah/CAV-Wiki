// Domain contracts for a future authenticated backend. These do not grant access.
export type UserRole =
  "reader" | "applicant" | "editor" | "moderator" | "admin";
export interface EditorApplication {
  id: string;
  userId: string;
  statement: string;
  status: "pending" | "approved" | "rejected";
}
export interface ArticleRevision {
  id: string;
  articleId: string;
  authorId: string;
  parentRevisionId: string | null;
  createdAt: string;
  summary: string;
  snapshot: import("./wiki").WikiArticle;
}
export interface ModerationDecision {
  revisionId: string;
  moderatorId: string;
  action: "approve" | "reject" | "rollback";
  reason: string;
  createdAt: string;
}

export const communityCapabilities = {
  accounts: false,
  editorApplications: false,
  articleEditing: false,
  moderation: false,
  revisions: false,
  rollback: false,
  admin: false,
} as const;
