import React from "react";

export type CreditsInfo = {
  enabled: boolean;
  plan: string;
  limit: number;
  used: number;
  remaining: number;
  resetAt?: number;
};

type Props = {
  credits?: CreditsInfo | null;
};

export const CreditsBadge: React.FC<Props> = ({ credits }) => {
  if (!credits || !credits.enabled) return null;

  const { plan, limit, remaining } = credits;
  const isLow = remaining <= 3;
  const isEmpty = remaining === 0;
  const planLabel = plan === "pro" ? "Pro" : "Free";

  return (
    <div
      className={
        "ec-credits-badge" +
        (isEmpty ? " ec-credits-badge--empty" : isLow ? " ec-credits-badge--low" : "")
      }
    >
      <span className="ec-credits-badge__plan">{planLabel} plan</span>
      <span className="ec-credits-badge__meter">
        {remaining} / {limit} rewrites left
      </span>
      {isEmpty && (
        <span className="ec-credits-badge__cta">
          Upgrade to keep cracking more articles.
        </span>
      )}
    </div>
  );
};

export default CreditsBadge;
