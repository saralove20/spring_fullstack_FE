<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

// 1. 상태 관리
const isLoading = ref(false);
const formData = ref({
  email: '',
  password: '',
  rememberMe: false
});

// 2. 로그인 제출 핸들러
const handleLogin = async () => {
  if (!formData.value.email || !formData.value.password) {
    alert('이메일과 비밀번호를 모두 입력해주세요.');
    return;
  }

  try {
    isLoading.value = true;
    console.log('로그인 시도:', formData.value);
    
    // API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    console.log('로그인 성공');
    // 메인 페이지로 이동 로직 (예: router.push('/'))
  } catch (error) {
    console.error('로그인 중 오류 발생:', error);
    alert('이메일 또는 비밀번호가 일치하지 않습니다.');
  } finally {
    isLoading.value = false;
  }
};

const goToSignup = () => {
  router.push('/signup')
};

const findPassword = () => {
  console.log('비밀번호 찾기 페이지로 이동');
};
</script>

<template>
  <div class="login-wrapper">
    <div class="login-card">
      <!-- 헤더 섹션 -->
      <header class="login-header">
        <h1 class="title">로그인</h1>
        <p class="subtitle">다시 만나서 반가워요! 정보를 입력해주세요.</p>
      </header>

      <!-- 입력 폼 섹션 -->
      <main class="login-form">
        <div class="form-group">
          <label for="email">이메일</label>
          <input 
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="example@email.com"
            class="form-input"
            @keyup.enter="handleLogin"
          />
        </div>

        <div class="form-group">
          <label for="password">비밀번호</label>
          <input 
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            class="form-input"
            @keyup.enter="handleLogin"
          />
        </div>

        <!-- 옵션 섹션 -->
        <div class="form-options">
          <label class="checkbox-container">
            <input type="checkbox" v-model="formData.rememberMe" />
            <span class="checkmark"></span>
            <span class="label-text">로그인 상태 유지</span>
          </label>
          <button @click="findPassword" class="find-link">비밀번호를 잊으셨나요?</button>
        </div>

        <button 
          @click="handleLogin" 
          class="login-submit-btn" 
          :disabled="isLoading"
        >
          {{ isLoading ? '로그인 중...' : '로그인' }}
        </button>
      </main>

      <!-- 하단 안내 섹션 -->
      <footer class="login-footer">
        <p>아직 회원이 아니신가요? <button @click="goToSignup" class="text-link">회원가입하기</button></p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px); /* 헤더 높이 제외 */
  background-color: #fcfcfd;
  padding: 40px 20px;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

.login-card {
  width: 100%;
  max-width: 440px;
  background: white;
  border-radius: 24px;
  padding: 56px 48px;
  border: 1px solid #e3e8ee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.login-header {
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
.login-form {
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

/* Options Section */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.85rem;
  color: #4f566b;
  user-select: none;
  gap: 8px;
}

.checkbox-container input {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  background-color: #fbfcfe;
  border: 1px solid #e3e8ee;
  border-radius: 5px;
  position: relative;
  transition: all 0.2s;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #f1f3f5;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #1a1f36;
  border-color: #1a1f36;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.find-link {
  background: none;
  border: none;
  font-size: 0.85rem;
  color: #697386;
  cursor: pointer;
  padding: 0;
}

.find-link:hover {
  text-decoration: underline;
}

/* Submit Button */
.login-submit-btn {
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

.login-submit-btn:hover:not(:disabled) {
  background-color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.login-submit-btn:disabled {
  background-color: #a3acb9;
  cursor: not-allowed;
  transform: none;
}

/* Footer */
.login-footer {
  margin-top: 32px;
  text-align: center;
  border-top: 1px solid #f7fafc;
  padding-top: 24px;
}

.login-footer p {
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
  .login-card {
    padding: 32px 24px;
    border: none;
    box-shadow: none;
    background: transparent;
  }
}
</style>