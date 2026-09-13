export type TabType = 'gate' | 'explore' | 'visits' | 'more';

export interface UserProfile {
  nameArabic: string;
  nameEnglish?: string;
  role: string;
  unit: string;
  avatarUrl: string;
}

export interface AdBannerItem {
  id: string;
  title: string;
  imageUrl: string;
}

export type BannerPool = 'gate' | 'other';

export interface VisitPass {
  id: string;
  visitorName: string;
  status: 'Used' | 'CanceledByOwner';
  fromLabel: string;
  toLabel: string;
}

export interface ExploreCategory {
  id: string;
  name: string;
  imageUrl: string;
}

export interface MoreMenuItem {
  id: string;
  title: string;
  iconName: string;
  badge?: string;
}
