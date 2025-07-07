body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', 'Montserrat', Arial, sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    background: #232946;
}

.login-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #232946 0%, #233fff 85%, #23d4e6 100%);
    background-size: 200% 200%;
    z-index: 0;
    animation: gradientMove 8s infinite alternate;
}

@keyframes gradientMove {
    from { background-position: 0 0; }
    to { background-position: 100% 100%; }
}

.login-container {
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,0.98);
    max-width: 370px;
    margin: 7vh auto;
    padding: 38px 35px 26px 35px;
    border-radius: 24px;
    box-shadow: 0 8px 40px #2329462c;
    text-align: center;
    animation: popIn 1s cubic-bezier(.22,1,.36,1);
    min-width: 300px;
}

@keyframes popIn {
    0% { transform: scale(0.7); opacity: 0; }
    60% { transform: scale(1.06); }
    80% { transform: scale(0.97);}
    100% { transform: scale(1); opacity: 1;}
}

.login-avatar {
    font-size: 90px;
    color: #006fe6;
    margin-bottom: 10px;
    animation: avatarBounce 1.4s infinite alternate cubic-bezier(.44,.61,.49,1.39);
}
@keyframes avatarBounce {
    from { transform: translateY(0) scale(1);}
    to { transform: translateY(-12px) scale(1.09);}
}

h2 {
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 29px;
    color: #232946;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: 700;
}

#loginForm {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.input-group {
    display: flex;
    align-items: center;
    background: #f7fafd;
    border-radius: 12px;
    padding: 10px 14px;
    box-shadow: 0 1px 4px rgba(38, 208, 206, 0.07);
    transition: box-shadow 0.2s;
    position: relative;
}

.input-group:focus-within {
    box-shadow: 0 1px 9px #26d0ce44;
}

.input-group label {
    color: #1a76d2;
    font-size: 1.15rem;
    margin-right: 10px;
}

.input-group input {
    border: none;
    outline: none;
    font-family: inherit;
    background: none;
    font-size: 1rem;
    width: 100%;
    padding: 11px 0;
    color: #232946;
    border-radius: 8px;
    letter-spacing: 0.3px;
    transition: background 0.2s;
}

.toggle-password {
    position: absolute;
    right: 12px;
    cursor: pointer;
    color: #aaa;
    font-size: 1.1rem;
    transition: color 0.18s;
}
.toggle-password:hover {
    color: #1a76d2;
}

.login-btn {
    background: linear-gradient(90deg, #232946 0%, #006fe6 100%);
    color: #fff;
    padding: 13px 0;
    border: none;
    border-radius: 50px;
    font-size: 1.05rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 18px #26d0ce33;
    letter-spacing: 0.5px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    transition: background 0.3s, box-shadow 0.3s, transform 0.1s;
}

.login-btn:hover {
    background: linear-gradient(90deg, #006fe6 0%, #232946 100%);
    transform: scale(1.04);
    box-shadow: 0 6px 26px #26d0ce32;
}

.login-message {
    min-height: 20px;
    margin-top: 9px;
    color: #d90429;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    transition: color 0.3s;
    animation: none;
}

.login-message.success {
    color: #26d0ce;
    animation: loginSuccessPop 0.7s;
}

@keyframes loginSuccessPop {
    0% { transform: scale(0.95); opacity: 0.1;}
    60% { transform: scale(1.05); opacity: 1;}
    80% { transform: scale(0.98);}
    100% { transform: scale(1);}
}

.login-links {
    margin-top: 18px;
    font-size: 0.95rem;
}

.login-links a {
    color: #1a76d2;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
}

.login-links a:hover {
    color: #d90429;
    text-decoration: underline;
}

/* Back to Main Page Button */
.back-btn {
    margin-top: 22px;
    background: linear-gradient(90deg, #6f6f8f 0%, #d3e9fc 100%);
    color: #232946;
    font-weight: 700;
    border: none;
    border-radius: 50px;
    padding: 11px 24px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 12px #23294618;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s, color 0.2s, transform 0.12s;
}
.back-btn:hover {
    background: linear-gradient(90deg, #d3e9fc 0%, #6f6f8f 100%);
    color: #006fe6;
    transform: scale(1.04);
}

@media (max-width: 430px) {
    .login-container {
        padding: 18px 4vw 16px 4vw;
        border-radius: 13px;
        min-width: unset;
    }
    .login-avatar {
        font-size: 60px;
    }
    h2 {
        font-size: 1.1rem;
    }
}