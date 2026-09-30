export interface Course {
  slug: string;
  title: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  author: string;
  level: string;
  studentsLabel: string;
  price: number;
  rating: number;
}

export interface CourseLesson {
  order: string;
  title: string;
  duration: string;
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface CourseRatingBreakdown {
  stars: number;
  count: number;
  percent: number;
}

export interface CourseReview {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  timeAgo: string;
  comment: string;
}

export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroVideo: string;
  level: string;
  rating: number;
  reviewCount: number;
  studentsLabel: string;
  author: string;
  authorDisplayName: string;
  authorRole: string;
  authorAvatar: string;
  price: number;
  priceUnit: string;
  enrollCta: string;
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  curriculumTitle: string;
  lessons: CourseLesson[];
  moreLessonsLabel: string;
  enrollPrompt: string;
  modulesIntro: string;
  modules: CourseModule[];
  lessonContentText: string;
  progressTrackingText: string;
  learningProgress: number;
  reviewsIntro: string;
  overallRating: number;
  ratingBreakdown: CourseRatingBreakdown[];
  reviews: CourseReview[];
}
