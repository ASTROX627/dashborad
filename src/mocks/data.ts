import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import { CourseSummary } from "@/types/course-summary.interface";

export const mockCourses: CourseSummary[] = [
  {
    id: 79,
    title: "RxJS در انگیولار",
    courseCategoryId: 23,
    duration: "1 ساعت 12 دقیقه",
    level: "پیشرفته",
    levelNumber: 0,
    averageReviewRating: 4,
    numOfReviews: 10,
    coverImageId: 20217,
    recordStatus: "تکمیل ضبط",
    slug: "rxjs-در-انگیولار",
    subTitle:
      "بررسی مفاهیم اساسی در برنامه نویسی واکنش گرا (Reactive Programming) به همراه پرکاربردترین Operator ها با یک پروژه عملیاتی",
    isFree: true,
    basePrice: 0,
  },
  {
    id: 84,
    title: "دوره آموزش جامع React",
    courseCategoryId: 23,
    duration: "6 ساعت ",
    level: "مقدماتی",
    levelNumber: 0,
    averageReviewRating: 4,
    numOfReviews: 44,
    coverImageId: 20218,
    recordStatus: "تکمیل ضبط",
    slug: "دوره-آموزش-جامع-react",
    subTitle:
      "دوره متمایز آموزش ری اکت با معرفی مفاهیم پایه تا پیاده سازی اپلیکیشن های جذاب | پیاده سازی اپلیکیشن های کاربردی در کنار بررسی مفاهیم پیشرفته ری اکت.",
    isFree: false,
    basePrice: 750000,
  },
  {
    id: 97,
    title: "آموزش پیشرفته React: پروژه پنل ادمین",
    courseCategoryId: 23,
    duration: "6 ساعت ",
    level: "پیشرفته",
    levelNumber: 0,
    averageReviewRating: 4,
    numOfReviews: 19,
    coverImageId: 20219,
    recordStatus: "تکمیل ضبط",
    slug: "آموزش-پیشرفته-react:-پروژه-پنل-ادمین",
    subTitle:
      "اگه با React آشنا هستید ولی نمی دونید چطور یه پروژه بزرگ رو از ابتدا شروع کنید، در این دوره شرکت کنید. این پروژه به شما تمامی تکنیک های پیشرفته پیاده سازی پروژه های عملیاتی رو یاد می ده",
    isFree: false,
    basePrice: 1500000,
  },
  {
    id: 105,
    title: "معماری پروژه های Large-Scale در ری‌اکت با استفاده از Next.js",
    courseCategoryId: 23,
    duration: "40 ساعت ",
    level: "پیشرفته",
    levelNumber: 0,
    averageReviewRating: 5,
    numOfReviews: 6,
    coverImageId: 20229,
    recordStatus: "تکمیل ضبط",
    slug: "معماری-پروژه-های-large-scale-در-ری‌اکت-با-استفاده-از-next.js",
    subTitle:
      "دوره پیشرفته معماری پروژه های Large-Scale در ری‌اکت با استفاده از Next.js - React Query - Zustand - Typescript - Tailwind Css - Mock Service Worker - Storybook - Jest - React Testing Library - Cypress - CI/CD",
    isFree: false,
    basePrice: 3000000,
  },
];

export const mockPosts: BlogPostSummary[] = [
  {
    title: "5 توصیه برتر برای افزایش مقیاس پذیری پروژه های React",
    slug: "5-توصیه-برتر-برای-افزایش-مقیاس-پذیری-پروژه-ها",
    postDate: "1403/03/27",
    studyTime: 0,
    isNew: false,
    numberOfViews: 0,
    author: "عباس سپهوند",
    numberOfComments: 0,
    coverImage:
      "https://minio-classbon.darkube.app/courses-images/CB-RAA/674216f2-2bb2-421a-a943-f6b7f05de1dd.webp",
  },
  {
    title: "ری‌‌‌‌‌‌اکت چیست؟ معرفی کامل کتابخانه ری‌اکت",
    slug: "ری‌‌‌‌‌‌اکت-چیست؟-معرفی-کامل-کتابخانه-ری‌اکت",
    postDate: "1403/03/27",
    studyTime: 0,
    isNew: false,
    numberOfViews: 0,
    author: "عباس سپهوند",
    numberOfComments: 0,
    coverImage:
      "https://minio-classbon.darkube.app/courses-images/CB-RAA/12133fd2-a343-4f42-b720-2fb5d6885b93.webp",
  },
];
