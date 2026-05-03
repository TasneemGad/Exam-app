export const MESSAGES = {
  ar: {
    auth: {
      loginSuccess: 'تم تسجيل الدخول بنجاح',
      loginError: 'خطأ في البريد الإلكتروني أو كلمة المرور',
      logoutSuccess: 'تم تسجيل الخروج بنجاح',
    },
    general: {
      saveSuccess: 'تم الحفظ بنجاح',
      deleteSuccess: 'تم الحذف بنجاح',
      error: 'حدث خطأ ما، حاولي مرة أخرى',
    }
  },
  en: {
    auth: {
      loginSuccess: 'Logged in successfully',
      loginError: 'Invalid email or password',
      logoutSuccess: 'Logged out successfully',
    },
    general: {
      saveSuccess: 'Saved successfully',
      deleteSuccess: 'Deleted successfully',
      error: 'Something went wrong, please try again',
    }
  }
} as const;

export type Lang = keyof typeof MESSAGES;
