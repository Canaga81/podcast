import React from 'react'
import './BigCards.css'

const BigCards = () => {
    return (
        <section className='bigCards'>
            <div className="bigCards_container">
                <div className="bigCards_container-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                        <path d="M15.2625 89.5125C15.92 89.5125 16.565 89.2475 17.03 88.78C17.4975 88.315 17.7625 87.6722 17.7625 87.0125C17.7625 86.355 17.4975 85.71 17.03 85.245C16.565 84.7802 15.92 84.5125 15.2625 84.5125C14.605 84.5125 13.9625 84.78 13.495 85.245C13.03 85.71 12.7625 86.355 12.7625 87.0125C12.7625 87.6725 13.03 88.3175 13.495 88.78C13.9625 89.2475 14.605 89.5125 15.2625 89.5125Z" fill="#1AD993" />
                        <path d="M60.7713 55.2773C61.7476 54.301 61.7476 52.718 60.7713 51.7415C59.7951 50.7655 58.2121 50.7655 57.2356 51.7415C56.7633 52.2138 56.1356 52.474 55.4678 52.474C54.8001 52.474 54.1723 52.2138 53.7001 51.7415C52.7238 50.7655 51.1408 50.7655 50.1643 51.7415C49.1881 52.7178 49.1881 54.3008 50.1643 55.2773C51.6266 56.7395 53.5471 57.4703 55.4676 57.4703C57.3881 57.4703 59.3093 56.7395 60.7713 55.2773Z" fill="#ABFFE0" />
                        <path d="M115.271 112.023V104.431C121.744 101.548 126.271 95.0575 126.271 87.5257V69.5095C126.271 59.3085 117.972 51.0095 107.771 51.0095C97.5697 51.0095 89.2707 59.3085 89.2707 69.5095V78.6762C82.5545 74.4097 74.9492 71.982 66.9365 71.5648V67.475C73.683 63.522 78.224 56.1955 78.224 47.8275V41.1175C78.162 41.2192 78.2985 41.027 78.224 41.1175C80.7803 36.9215 82.3377 31.8062 82.3377 26.8692V2.5C82.3377 1.1195 81.2185 0 79.8377 0H50.7992C38.5578 0 28.5987 9.95925 28.5987 22.2008V26.8695C28.5987 31.8065 30.1562 36.9215 32.7125 41.1177C32.638 41.0272 32.7745 41.2195 32.7125 41.1177V47.8278C32.7125 56.1958 37.2535 63.522 44 67.4753V71.567C41.2747 71.7132 38.5765 72.1003 35.9357 72.7148C35.9178 72.7193 35.8993 72.722 35.8812 72.7268C31.314 73.795 26.92 75.5488 22.8635 77.9475C21.675 78.6503 21.2812 80.1833 21.984 81.3717C22.4505 82.161 23.2833 82.5997 24.1383 82.5997C24.5708 82.5997 25.009 82.4873 25.4085 82.251C28.2533 80.5687 31.285 79.2443 34.4315 78.2903C36.4292 88.1348 45.1485 95.4717 55.4683 95.4717C65.786 95.4717 74.5165 88.121 76.5078 78.2687C81.0695 79.6492 85.3685 81.8255 89.2707 84.7493V87.5257C89.2707 95.0575 93.7972 101.548 100.271 104.431V112.023C95.4877 112.294 91.3627 115.065 89.1865 119.048V106.5C89.1865 105.119 88.0673 104 86.6865 104C85.3057 104 84.1865 105.119 84.1865 106.5V123H26.75V106.5C26.75 105.119 25.6307 104 24.25 104C22.8692 104 21.75 105.119 21.75 106.5V123H5V118C5 110.664 6.93875 103.456 10.6065 97.155C11.301 95.962 10.8967 94.4313 9.7035 93.7367C8.51 93.0425 6.9795 93.4462 6.28525 94.6397C2.1735 101.704 0 109.782 0 118V125.5C0 126.88 1.11925 128 2.5 128H125.5C126.881 128 128 126.88 128 125.5C128 118.315 122.357 112.424 115.271 112.023ZM33.5988 22.2008C33.5988 12.7163 41.315 5 50.7992 5H77.3377V26.8695C77.3377 29.3452 76.9208 31.787 76.1145 34.0942C75.09 32.0887 74.1752 30.0273 73.3792 27.9298C73.004 26.9405 71.7582 26.3533 70.741 26.3533C70.5415 26.3533 70.9425 26.3033 70.741 26.3533C65.8737 27.5625 60.535 28.2127 55.4683 28.2127C50.4022 28.2127 45.3652 27.5995 40.4972 26.39C39.2695 26.0855 38.006 26.7463 37.557 27.9295C36.7612 30.0268 35.8463 32.0883 34.8218 34.094C34.0155 31.7868 33.5985 29.345 33.5985 26.8692L33.5988 22.2008ZM37.7125 47.8278V39.2445C39.1035 36.8217 40.347 34.309 41.4225 31.7347C46.0167 32.7162 50.7318 33.213 55.4683 33.213C60.2055 33.213 64.9202 32.7165 69.5143 31.735C70.5898 34.3095 71.8332 36.822 73.224 39.2445V47.8278C73.224 57.6183 65.2588 65.5833 55.4683 65.5833C45.6777 65.5833 37.7125 57.6183 37.7125 47.8278ZM55.4683 70.5833C57.7145 70.5833 59.8852 70.2545 61.9365 69.6452V74L61.9367 74.0027C61.9367 77.5695 59.035 80.4715 55.4683 80.4715C51.9015 80.4715 49 77.5697 49 74.0033V74V69.6452C51.0512 70.2545 53.222 70.5833 55.4683 70.5833ZM55.4683 90.4717C47.495 90.4717 40.7695 84.7627 39.301 77.1305C40.9473 76.8415 42.6138 76.6533 44.2917 76.5642C45.4587 81.6585 50.025 85.4717 55.4683 85.4717C60.9132 85.4717 65.4808 81.656 66.646 76.5592C68.332 76.6462 69.9977 76.8323 71.6377 77.1165C70.1732 84.7533 63.439 90.4717 55.4683 90.4717ZM94.2707 77.6855H121.271V82.6855H94.2707V77.6855ZM107.771 56.0095C115.215 56.0095 121.271 62.0657 121.271 69.5095V72.6855H94.2707V69.5095C94.2707 62.0657 100.327 56.0095 107.771 56.0095ZM94.275 87.6855H121.267C121.181 95.0557 115.162 101.026 107.771 101.026C100.381 101.026 94.3612 95.0557 94.275 87.6855ZM110.271 106.026V112H105.271V106.026H110.271ZM92.9167 123C93.9867 119.529 97.2243 117 101.042 117H114.5C118.317 117 121.555 119.529 122.625 123H92.9167Z" fill="#1AD993" />
                        <path d="M97.7688 38.6519C96.7926 39.6282 96.7926 41.2112 97.7688 42.1877C98.7451 43.1637 100.328 43.1637 101.304 42.1877C103.069 40.4232 105.415 39.4517 107.91 39.4517C110.405 39.4517 112.751 40.4234 114.515 42.1877C115.003 42.6757 115.643 42.9199 116.283 42.9199C116.923 42.9199 117.563 42.6757 118.051 42.1877C119.027 41.2114 119.027 39.6284 118.051 38.6519C115.342 35.9432 111.74 34.4514 107.91 34.4514C104.079 34.4517 100.478 35.9432 97.7688 38.6519Z" fill="#1AD993" />
                        <path d="M93.9342 35.0626C97.63 31.3666 102.544 29.3311 107.771 29.3311C112.997 29.3311 117.911 31.3666 121.607 35.0626C122.095 35.5506 122.735 35.7948 123.375 35.7948C124.015 35.7948 124.655 35.5506 125.143 35.0626C126.119 34.0863 126.119 32.5033 125.143 31.5268C120.502 26.8863 114.333 24.3311 107.77 24.3311C101.208 24.3311 95.0385 26.8866 90.3982 31.5268C89.422 32.5031 89.422 34.0861 90.3982 35.0626C91.375 36.0386 92.958 36.0386 93.9342 35.0626Z" fill="#ABFFE0" />
                    </svg>

                    <div className="big_number_text">
                        <h1 className='big_number'>500+</h1>
                        <h2 className='big_text'>Podcasts</h2>
                    </div>
                </div>
                <div className="bigCards_container-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="138" height="128" viewBox="0 0 138 128" fill="none">
                        <path d="M59.1083 55.2147L59.1082 55.2147C58.1679 54.6737 57.5903 53.6748 57.5903 52.5959V27.2481C57.5903 26.169 58.1679 25.1703 59.1084 24.629C60.0491 24.0875 61.2084 24.0875 62.1491 24.629L62.1492 24.629L84.1734 37.3029L84.1734 37.303C85.1137 37.844 85.6913 38.8428 85.6913 39.922C85.6913 41.0011 85.1138 41.9998 84.1733 42.5411L62.1492 55.2147L62.149 55.2148C61.679 55.4854 61.154 55.6208 60.6287 55.6208C60.1034 55.6208 59.5788 55.4855 59.1083 55.2147ZM65.1659 33.3527L63.6672 32.4902V34.2194V45.6238V47.353L65.1659 46.4905L75.0748 40.7885L76.581 39.9218L75.0749 39.055L65.1659 33.3527Z" fill="#ABFFE0" stroke="#503AE7" stroke-width="2" />
                        <path d="M128.629 95.2154L127.758 96.0652L128.76 96.7552C133.643 100.115 136.845 105.723 136.845 112.061V123.975C136.845 125.642 135.487 127 133.806 127C132.125 127 130.768 125.642 130.768 123.975V112.061C130.768 105.143 125.123 99.5217 118.191 99.5217C111.258 99.5217 105.614 105.143 105.614 112.061V123.975C105.614 125.642 104.257 127 102.576 127C100.895 127 99.5373 125.642 99.5373 123.975V112.061C99.5373 105.723 102.739 100.115 107.621 96.7555L108.624 96.0655L107.753 95.2157C105.134 92.6625 103.453 89.1668 103.271 85.2872L103.226 84.3342H102.272H84.8285H83.8744L83.8296 85.2873C83.6474 89.1668 81.9665 92.6625 79.3478 95.2157L78.4762 96.0655L79.4791 96.7555C84.3619 100.115 87.5635 105.723 87.5635 112.061V123.975C87.5635 125.642 86.2062 127 84.5251 127C82.844 127 81.4867 125.642 81.4867 123.975V112.061C81.4867 105.143 75.8425 99.5217 68.9099 99.5217C61.9773 99.5217 56.3331 105.143 56.3331 112.061V123.975C56.3331 125.642 54.9758 127 53.2947 127C51.6136 127 50.2563 125.642 50.2563 123.975V112.061C50.2563 105.723 53.4579 100.115 58.3407 96.7555L59.3436 96.0655L58.4719 95.2157C55.8533 92.6628 54.1727 89.1669 53.9902 85.2872L53.9453 84.3342H52.9913H35.5725H34.6184L34.5736 85.2872C34.3911 89.1668 32.7105 92.6625 30.0918 95.2157L29.2203 96.0655L30.2231 96.7555C35.1056 100.115 38.3072 105.723 38.3072 112.061V123.975C38.3072 125.642 36.9499 127 35.2688 127C33.5877 127 32.2304 125.642 32.2304 123.975V112.061C32.2304 105.143 26.5862 99.5217 19.6536 99.5217C12.721 99.5217 7.07683 105.143 7.07683 112.061V123.975C7.07683 125.642 5.71951 127 4.03841 127C2.35732 127 1 125.642 1 123.975V112.061C1 105.723 4.2016 100.115 9.08436 96.7556L10.0873 96.0655L9.21564 95.2157C6.43944 92.509 4.71588 88.7429 4.71588 84.5821C4.71588 78.2432 8.71712 72.8128 14.3431 70.6721L14.9875 70.4269V69.7375V4.02517C14.9875 2.35758 16.3448 1 18.0259 1H119.794C121.475 1 122.832 2.35758 122.832 4.02517V69.7275V70.4183L123.478 70.6628C129.117 72.7971 133.129 78.2341 133.129 84.5818C133.129 88.7426 131.405 92.5087 128.629 95.2154ZM116.755 8.05035V7.05035H115.755H22.0646H21.0646V8.05035V68.878V69.7376L21.9144 69.8666C26.7057 70.5943 30.7569 73.6041 32.9161 77.7459L33.1965 78.2836H33.8029H54.7609H55.3673L55.6476 77.7459C58.1391 72.9668 63.1486 69.6963 68.9099 69.6963C74.6712 69.6963 79.6807 72.9668 82.1721 77.7459L82.4525 78.2836H83.0589H104.042H104.648L104.929 77.7459C107.085 73.6106 111.126 70.6041 115.907 69.8701L116.755 69.7399V68.8817V8.05035ZM109.33 84.5818C109.33 89.4575 113.307 93.4172 118.191 93.4172C123.075 93.4172 127.052 89.4578 127.052 84.5818C127.052 79.7063 123.075 75.7467 118.191 75.7467C113.307 75.7467 109.33 79.706 109.33 84.5818ZM68.9099 93.4172C73.7936 93.4172 77.7711 89.4578 77.7711 84.5818C77.7711 79.7063 73.7936 75.7467 68.9099 75.7467C64.0262 75.7467 60.0487 79.706 60.0487 84.5818C60.0487 89.4575 64.0261 93.4172 68.9099 93.4172ZM28.5145 84.5818C28.5145 79.7063 24.5374 75.7467 19.6536 75.7467C14.7698 75.7467 10.7927 79.7063 10.7927 84.5818C10.7927 89.4578 14.7698 93.4172 19.6536 93.4172C24.5374 93.4172 28.5145 89.4578 28.5145 84.5818Z" fill="#1AD993" stroke="#503AE7" stroke-width="2" />
                    </svg>

                    <div className="big_number_text">
                        <h1 className='big_number'>24M</h1>
                        <h2 className='big_text'>Views</h2>
                    </div>
                </div>
                <div className="bigCards_container-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="109" height="128" viewBox="0 0 109 128" fill="none">
                        <path d="M54.36 81.0664H51.0947C51.0367 81.0664 50.9895 81.0195 50.9895 80.9615V75.999C50.9895 74.9642 50.1505 74.1252 49.1157 74.1252C48.0809 74.1252 47.2419 74.9642 47.2419 75.999V80.9615C47.2419 83.0859 48.9703 84.814 51.0947 84.814H54.36C56.8544 84.814 58.8838 86.8434 58.8838 89.3377V106.365C58.8838 106.862 58.7277 107.337 58.4321 107.737L51.1516 117.596C50.9135 117.918 50.7851 118.308 50.7851 118.709V126.126C50.7851 127.161 51.6241 128 52.6589 128C53.6937 128 54.5327 127.161 54.5327 126.126V119.326L61.4466 109.963C62.2216 108.914 62.6311 107.669 62.6311 106.365V89.3377C62.6313 84.7772 58.9208 81.0664 54.36 81.0664Z" fill="#1AD993" />
                        <path d="M47.242 68.0133C47.242 69.0481 48.0809 69.8871 49.1157 69.8871C50.1506 69.8871 50.9895 69.0481 50.9895 68.0133V49.9347C50.9895 45.6452 47.4998 42.1555 43.2106 42.1555C38.9214 42.1555 35.4317 45.6452 35.4317 49.9347V66.85C34.5026 66.3771 33.4528 66.1085 32.3407 66.1085H30.4595C28.2469 66.1085 26.2775 67.1656 25.0268 68.8005C23.8236 67.748 22.2509 67.1079 20.5305 67.1079H18.6492C16.2288 67.1079 14.0995 68.373 12.884 70.2758C11.7298 69.3869 10.2862 68.8567 8.72026 68.8567H6.839C3.06822 68.8567 0.000488281 71.9245 0.000488281 75.695V91.8396C0.000488281 92.8745 0.839437 93.7134 1.87426 93.7134C2.90908 93.7134 3.74803 92.8745 3.74803 91.8396V75.695C3.74803 73.9909 5.13462 72.6043 6.839 72.6043H8.72026C10.4246 72.6043 11.8112 73.9909 11.8112 75.695V76.1832C11.8112 77.218 12.6502 78.0569 13.685 78.0569C14.7198 78.0569 15.5588 77.218 15.5588 76.1832V73.9461C15.5588 72.242 16.9454 70.8554 18.6495 70.8554H20.5308C22.2351 70.8554 23.6217 72.242 23.6217 73.9461V76.1832C23.6217 77.218 24.4607 78.0569 25.4955 78.0569C26.5303 78.0569 27.3693 77.218 27.3693 76.1832V73.9461C27.3693 73.7238 27.3578 73.5042 27.3368 73.2871C27.357 73.1766 27.3693 73.0632 27.3693 72.9468C27.3693 71.2427 28.7559 69.8561 30.46 69.8561H32.3412C34.0454 69.8561 35.432 71.2427 35.432 72.9468V72.9493V76.1832C35.432 77.218 36.2709 78.0569 37.3057 78.0569C38.3406 78.0569 39.1795 77.218 39.1795 76.1832V49.9347C39.1795 47.7116 40.9881 45.9031 43.2109 45.9031C45.4337 45.9031 47.2422 47.7116 47.2422 49.9347V68.0133H47.242Z" fill="#1AD993" />
                        <path d="M4.86131 110.352C4.14303 109.436 3.74754 108.291 3.74754 107.128V99.8252C3.74754 98.7904 2.90859 97.9514 1.87377 97.9514C0.838949 97.9514 0 98.7904 0 99.8252V107.128C0 109.126 0.679304 111.093 1.91249 112.665L4.68267 116.196V126.126C4.68267 127.161 5.52162 128 6.55644 128C7.59126 128 8.43021 127.161 8.43021 126.126V115.549C8.43021 115.13 8.28955 114.723 8.03072 114.393L4.86131 110.352Z" fill="#1AD993" />
                        <path d="M88.4596 21.9133L78.7028 18.6094L72.8144 12.7206C72.0826 11.9888 70.8962 11.9885 70.1646 12.7206C69.4326 13.4523 69.4326 14.6385 70.1644 15.3703L75.0374 20.2436L64.8009 30.4801C64.0691 31.2119 64.0691 32.3984 64.8009 33.1299C65.1669 33.4957 65.6466 33.6788 66.126 33.6788C66.6055 33.6788 67.0852 33.4959 67.4512 33.1299L78.1894 22.3917L87.2579 25.4624C87.8645 25.6678 88.0429 26.1732 88.0914 26.3808C88.1398 26.5884 88.2038 27.1206 87.7511 27.5735L57.6364 57.6888C57.3131 58.0121 56.9451 58.067 56.6897 58.057C55.6622 58.0106 54.7825 58.8163 54.7388 59.8504C54.695 60.8842 55.498 61.7579 56.5321 61.8013C56.6055 61.8046 56.6787 61.8061 56.7517 61.8061C58.0876 61.8061 59.3355 61.2899 60.2864 60.339L69.0051 51.62C70.6153 53.0486 72.665 53.8308 74.8358 53.8308C77.1863 53.8308 79.3961 52.9154 81.0577 51.2537L81.3151 50.9967C84.6184 47.6931 84.7396 42.3953 81.6816 38.9436L90.4006 30.2246C91.637 28.9879 92.1379 27.2325 91.74 25.5296C91.3425 23.826 90.116 22.4744 88.4596 21.9133ZM78.6655 48.3459L78.4082 48.603C77.4541 49.5574 76.1854 50.0828 74.8358 50.0828C73.6911 50.0828 72.6043 49.7045 71.7186 49.0075L79.0693 41.6568C80.6245 43.638 80.4896 46.5219 78.6655 48.3459Z" fill="#1AD993" />
                        <path d="M34.3048 13.8235C30.3724 21.7648 31.7023 31.671 38.3057 38.2744L38.3619 38.3309C38.7279 38.6977 39.2081 38.8813 39.6883 38.8813C40.1672 38.8813 40.6459 38.6989 41.0117 38.3339C41.7442 37.6029 41.7457 36.4167 41.0146 35.6841L40.9569 35.6264C34.1384 28.8079 34.1384 17.7137 40.9569 10.8952C44.0739 7.77798 48.2144 5.96492 52.6155 5.78954C56.9909 5.61515 61.2391 7.0677 64.5744 9.87935C65.3657 10.5464 66.5476 10.446 67.2147 9.65425C67.8818 8.86302 67.7811 7.68105 66.9898 7.01399C62.9373 3.59798 57.7766 1.83339 52.4664 2.045C49.4471 2.16517 46.5295 2.92067 43.8795 4.23681L41.6238 1.98104C38.9822 -0.660472 34.6843 -0.660222 32.0428 1.98104C30.7631 3.2607 30.0586 4.96208 30.0586 6.77164C30.0586 8.58121 30.7631 10.2826 32.0428 11.562L34.3048 13.8235ZM34.6931 4.6308C35.8733 3.45058 37.794 3.45058 38.9742 4.6308L40.6007 6.25723C39.7955 6.86084 39.0285 7.52365 38.3072 8.24493C37.5804 8.9717 36.9211 9.74069 36.3217 10.5404L34.6931 8.91149C34.1212 8.33986 33.8064 7.57961 33.8064 6.77115C33.8064 5.96268 34.1212 5.20268 34.6931 4.6308Z" fill="#1AD993" />
                        <path d="M59.2471 36.0344L58.1445 37.1369C57.4128 37.8687 57.4128 39.0552 58.1445 39.7867C58.5105 40.1525 58.9902 40.3356 59.4697 40.3356C59.9491 40.3356 60.4288 40.1527 60.7948 39.7867L61.8973 38.6842C62.6291 37.9524 62.6291 36.7659 61.8973 36.0344C61.1653 35.3027 59.9791 35.3027 59.2471 36.0344Z" fill="#1AD993" />
                        <path d="M18.7725 39.7133C19.2614 39.7133 19.7501 39.523 20.1174 39.1442C20.8379 38.4015 20.8202 37.2152 20.0772 36.4947C17.9491 34.4301 16.7773 31.6684 16.7773 28.7186C16.7773 25.7687 17.9493 23.0068 20.0774 20.9422C20.8202 20.2216 20.8379 19.0354 20.1174 18.2927C19.3969 17.5496 18.2106 17.5322 17.4679 18.2527C14.606 21.0291 13.0298 24.7459 13.0298 28.7186C13.0298 32.6912 14.606 36.408 17.4679 39.1844C17.8319 39.5375 18.3023 39.7133 18.7725 39.7133Z" fill="#ABFFE0" />
                        <path d="M23.0747 34.1647C23.4252 34.4573 23.8512 34.6002 24.2749 34.6002C24.8111 34.6002 25.3435 34.3711 25.7142 33.9276C26.3776 33.1331 26.2714 31.9517 25.4771 31.2883C24.7116 30.649 24.2727 29.7124 24.2727 28.7185C24.2727 27.7247 24.7116 26.7878 25.4771 26.1485C26.2714 25.4851 26.3776 24.3034 25.7142 23.5092C25.0507 22.7147 23.869 22.6088 23.075 23.2721C21.4545 24.6255 20.5251 26.6107 20.5251 28.7183C20.5249 30.8264 21.4543 32.8113 23.0747 34.1647Z" fill="#1AD993" />
                        <path d="M104.201 18.2524C103.458 17.5316 102.271 17.5498 101.551 18.2923C100.83 19.0351 100.848 20.2213 101.591 20.9418C103.719 23.0067 104.891 25.7684 104.891 28.7182C104.891 31.6683 103.719 34.4297 101.591 36.4944C100.848 37.2149 100.83 38.4011 101.551 39.1439C101.919 39.5226 102.407 39.7128 102.896 39.7128C103.366 39.7128 103.837 39.5369 104.201 39.1839C107.063 36.4072 108.639 32.6904 108.639 28.718C108.639 24.7456 107.063 21.0293 104.201 18.2524Z" fill="#ABFFE0" />
                        <path d="M98.5939 23.272C97.7999 22.6089 96.6182 22.7146 95.9549 23.5091C95.2916 24.3033 95.3975 25.485 96.1917 26.1484C96.957 26.7877 97.3962 27.7246 97.3962 28.7184C97.3962 29.7123 96.957 30.6489 96.1917 31.288C95.3972 31.9513 95.2911 33.133 95.9544 33.9272C96.3249 34.3712 96.8573 34.6001 97.3937 34.6001C97.8172 34.6001 98.2431 34.4574 98.5936 34.1646C100.214 32.8112 101.144 30.8263 101.144 28.7182C101.144 26.6106 100.214 24.6254 98.5939 23.272Z" fill="#1AD993" />
                    </svg>

                    <div className="big_number_text">
                        <h1 className='big_number'>600K</h1>
                        <h2 className='big_text'>Subscribers</h2>
                    </div>
                </div>
                <div className="bigCards_container-card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none">
                        <path d="M64 0H36.2667C35.0885 0 34.1333 0.955208 34.1333 2.13333V17.0667H2.13333C0.955208 17.0667 0 18.0219 0 19.2V125.867C0 127.045 0.955208 128 2.13333 128H64C65.1781 128 66.1333 127.045 66.1333 125.867V2.13333C66.1333 0.955208 65.1781 0 64 0ZM61.8667 110.933H38.4V106.667H61.8667V110.933ZM4.26667 32H34.1333V96H4.26667V32ZM61.8667 23.4667H38.4V17.0667H61.8667V23.4667ZM4.26667 100.267H34.1333V106.667H4.26667V100.267ZM38.4 102.4V27.7333H61.8667V102.4H38.4ZM61.8667 4.26667V12.8H38.4V4.26667H61.8667ZM34.1333 21.3333V27.7333H4.26667V21.3333H34.1333ZM4.26667 110.933H34.1333V123.733H4.26667V110.933ZM38.4 123.733V115.2H61.8667V123.733H38.4Z" fill="#1AD993" />
                        <path d="M127.931 116.796L102.331 18.6626C102.189 18.1126 101.832 17.6428 101.341 17.3563C100.85 17.0709 100.266 16.9928 99.7168 17.1397L67.7168 25.673C66.5835 25.9751 65.9064 27.1355 66.2022 28.2709L91.8022 126.404C91.9449 126.954 92.3022 127.424 92.7939 127.709C93.2845 127.994 93.8689 128.071 94.4168 127.923L126.417 119.39C127.548 119.088 128.224 117.929 127.931 116.796ZM74.2658 42.2782L102.144 34.8459L103.147 38.6855L75.271 46.1293L74.2658 42.2782ZM104.224 42.8251L116.597 90.2865L88.7293 97.722L76.3564 50.2574L104.224 42.8251ZM117.683 94.4167L119.868 102.789L91.9897 110.221L89.8137 101.852L117.683 94.4167ZM98.7439 21.8136L101.067 30.7199L73.1887 38.1501L70.8678 29.248L98.7439 21.8136ZM95.3897 123.253L93.0668 114.347L120.945 106.913L123.266 115.815L95.3897 123.253Z" fill="#ABFFE0" />
                        <path d="M27.7332 38.3999H10.6665C9.48841 38.3999 8.5332 39.3551 8.5332 40.5332V57.5999C8.5332 58.778 9.48841 59.7332 10.6665 59.7332H27.7332C28.9113 59.7332 29.8665 58.778 29.8665 57.5999V40.5332C29.8665 39.3551 28.9113 38.3999 27.7332 38.3999ZM25.5999 55.4666H12.7999V42.6666H25.5999V55.4666Z" fill="#ABFFE0" />
                    </svg>

                    <div className="big_number_text">
                        <h1 className='big_number'>24M</h1>
                        <h2 className='big_text'>Views</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BigCards