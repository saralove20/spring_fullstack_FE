<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

// 1. 상태 관리
const isLoading = ref(false);
const formData = ref({
  email: '',
  password: '',
  confirmPassword: '',
  nickname: ''
});

// 2. 유효성 검사 상태
const errors = ref({
  email: '',
  password: '',
  confirmPassword: '',
  nickname: ''
});

// 3. 비밀번호 일치 여부 확인 (computed)
const isPasswordMatch = computed(() => {
  return formData.value.password === formData.value.confirmPassword;
});

// 4. 회원가입 제출 핸들러
const handleSignup = async () => {
  // 에러 초기화
  errors.value = { email: '', password: '', confirmPassword: '', nickname: '' };

  // 간단한 유효성 검사
  if (!formData.value.email.includes('@')) {
    errors.value.email = '유효한 이메일 형식을 입력해주세요.';
    return;
  }
  if (formData.value.password.length < 6) {
    errors.value.password = '비밀번호는 최소 6자 이상이어야 합니다.';
    return;
  }
  if (!isPasswordMatch.value) {
    errors.value.confirmPassword = '비밀번호가 일치하지 않습니다.';
    return;
  }
  if (!formData.value.nickname.trim()) {
    errors.value.nickname = '닉네임을 입력해주세요.';
    return;
  }

  try {
    isLoading.value = true;
    console.log('회원가입 데이터 전송:', formData.value);
    
    // API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('탈래말래의 회원이 되신 것을 환영합니다!');
    // 로그인 페이지로 이동 로직 (예: router.push('/login'))
  } catch (error) {
    console.error('회원가입 중 오류 발생:', error);
    alert('회원가입에 실패했습니다. 다시 시도해주세요.');
  } finally {
    isLoading.value = false;
  }
};

const goToLogin = () => {
  router.push('/login')
};
</script>

<template>
  <div class="signup-wrapper">
    <div class="signup-card">
      <!-- 헤더 섹션 -->
      <header class="signup-header">
        <h1 class="title">회원가입</h1>
        <p class="subtitle">탈래말래와 함께 스마트한 이동을 시작하세요.</p>
      </header>

      <!-- 입력 폼 섹션 -->
      <main class="signup-form">
        <div class="form-group">
          <label for="email">이메일</label>
          <input 
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="example@email.com"
            class="form-input"
            :class="{ 'has-error': errors.email }"
          />
          <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="nickname">닉네임</label>
          <input 
            id="nickname"
            v-model="formData.nickname"
            type="text"
            placeholder="사용하실 닉네임을 입력하세요"
            class="form-input"
            :class="{ 'has-error': errors.nickname }"
          />
          <span v-if="errors.nickname" class="error-text">{{ errors.nickname }}</span>
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input 
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="6자 이상 입력하세요"
            class="form-input"
            :class="{ 'has-error': errors.password }"
          />
          <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
        </div>

        <div class="form-group">
          <label for="confirmPassword">비밀번호 확인</label>
          <input 
            id="confirmPassword"
            v-model="formData.confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            class="form-input"
            :class="{ 'has-error': errors.confirmPassword }"
          />
          <span v-if="errors.confirmPassword" class="error-text">{{ errors.confirmPassword }}</span>
        </div>

        <button 
          @click="handleSignup" 
          class="signup-submit-btn" 
          :disabled="isLoading"
        >
          {{ isLoading ? '처리 중...' : '계정 만들기' }}
        </button>
      </main>

      <!-- 하단 안내 섹션 -->
      <footer class="signup-footer">
        <p>이미 계정이 있으신가요? <button @click="goToLogin" class="text-link">로그인하기</button></p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.signup-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* 헤더 높이 제외 */
  background-color: #fcfcfd;
  padding: 40px 20px;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

.signup-card {
  width: 100%;
  max-width: 440px;
  background: white;
  border-radius: 24px;
  padding: 48px;
  border: 1px solid #e3e8ee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.signup-header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  color: #1a1f36;
  letter-spacing: -0.02em;
}

.subtitle {
  color: #697386;
  font-size: 0.95rem;
  margin: 0;
}

/* Form Styles */
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 700;
  font-size: 0.85rem;
  color: #4f566b;
  margin-left: 4px;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid #e3e8ee;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease;
  background-color: #fbfcfe;
}

.form-input:focus {
  border-color: #1a1f36;
  background-color: white;
  box-shadow: 0 0 0 3px rgba(26, 31, 54, 0.05);
}

.form-input.has-error {
  border-color: #f44336;
  background-color: #fffafa;
}

.error-text {
  font-size: 0.8rem;
  color: #f44336;
  margin-left: 4px;
}

/* Submit Button - 강조 효과 반영 */
.signup-submit-btn {
  margin-top: 12px;
  background-color: #1a1f36;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.signup-submit-btn:hover:not(:disabled) {
  background-color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.signup-submit-btn:disabled {
  background-color: #a3acb9;
  cursor: not-allowed;
  transform: none;
}

/* Footer */
.signup-footer {
  margin-top: 32px;
  text-align: center;
  border-top: 1px solid #f7fafc;
  padding-top: 24px;
}

.signup-footer p {
  font-size: 0.9rem;
  color: #697386;
  margin: 0;
}

.text-link {
  background: none;
  border: none;
  color: #1a1f36;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  margin-left: 4px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.text-link:hover {
  color: #4f46e5;
}

@media (max-width: 480px) {
  .signup-card {
    padding: 32px 24px;
    border: none;
    box-shadow: none;
    background: transparent;
  }
}
</style>