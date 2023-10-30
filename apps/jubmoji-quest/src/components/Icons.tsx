export const Icons: Record<string, any> = {
  close: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowButton: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12 13.672L16.95 8.72198L18.364 10.136L12 16.5L5.63599 10.136L7.04999 8.72198L12 13.672Z"
        fill="#92D7FE"
      />
    </svg>
  ),
  quest: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      {...props}
    >
      <path
        d="M20.4838 14.5451C19.8836 12.6377 18.7992 10.6166 17.3526 8.67328L16.4941 7.33067C15.9549 6.48705 15.8545 6.3303 15.8915 5.65421C15.8951 5.59916 15.8999 5.54292 15.9119 5.48788C15.9705 5.21505 16.1199 4.94701 16.4104 4.42887L17.5606 2.37906C17.6622 2.19718 17.453 1.99973 17.2772 2.11222L15.2985 3.37944C14.7988 3.69893 14.5405 3.86526 14.2715 3.93945C14.2177 3.95381 14.1603 3.96339 14.1041 3.96937C13.4334 4.04475 13.2696 3.95381 12.398 3.4632C12.227 3.36747 12.0573 3.26815 11.8887 3.16763C9.29065 1.22672 6.62925 0.0695883 4.42816 0.00257761C3.12137 -0.0345176 2.01903 0.329255 1.24667 1.06278C-0.109133 2.34915 -0.368577 4.60238 0.514969 7.40965C1.36145 10.0984 3.1668 13.0158 5.59865 15.622C9.14838 19.4285 13.3533 21.854 16.5706 21.9522C16.6352 21.9545 16.6998 21.9545 16.7631 21.9545C17.9874 21.9545 19.018 21.5884 19.7533 20.8919C21.1091 19.6056 21.3686 17.3524 20.485 14.5451H20.4838ZM19.0946 20.1967C18.5027 20.7591 17.6622 21.026 16.5993 20.9949C13.6725 20.9051 9.62901 18.5394 6.29688 14.9687C3.96068 12.4642 2.23065 9.67724 1.42601 7.12246C0.658441 4.68375 0.828215 2.77873 1.90306 1.75921C2.46379 1.22792 3.24452 0.958676 4.2273 0.958676C4.28349 0.958676 4.34088 0.958676 4.39827 0.961069C5.85092 1.00534 7.57856 1.61203 9.3588 2.6471C10.0857 3.06951 10.717 3.64628 11.1917 4.34032C11.2455 4.4181 11.2981 4.49827 11.3495 4.57845C11.6723 5.08222 11.8373 5.34189 11.9102 5.61352C11.9234 5.66258 11.9317 5.71404 11.9365 5.7643C12.0142 6.44278 11.9234 6.60432 11.432 7.48025L10.2818 9.53006C10.1802 9.71194 10.3894 9.90938 10.5652 9.7969L12.5439 8.52968C13.0472 8.20659 13.3067 8.04146 13.5781 7.96847C13.6271 7.9553 13.6785 7.94693 13.7287 7.94214C14.4066 7.86436 14.568 7.9553 15.4432 8.44711C16.084 8.8073 16.64 9.3027 17.0584 9.90699C18.2038 11.5571 19.0671 13.242 19.5692 14.8371C20.3368 17.2758 20.167 19.1808 19.0922 20.2003L19.0946 20.1967Z"
        fill="currentColor"
      />
    </svg>
  ),
  checked: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M5 8L7 10L11 6M5.2 14H10.8C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.0799 2 5.2V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14Z"
        stroke="currentColor"
        strokeWidth="0.666667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  warning: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
    >
      <path
        d="M8.49976 6.00003V8.6667M8.49976 11.3334H8.50642M7.57663 2.59451L2.09338 12.0656C1.78924 12.5909 1.63717 12.8536 1.65965 13.0692C1.67925 13.2572 1.77776 13.4281 1.93067 13.5392C2.10597 13.6667 2.40948 13.6667 3.0165 13.6667H13.983C14.59 13.6667 14.8935 13.6667 15.0688 13.5392C15.2217 13.4281 15.3203 13.2572 15.3399 13.0692C15.3623 12.8536 15.2103 12.5909 14.9061 12.0656L9.42288 2.59451C9.11983 2.07107 8.96831 1.80935 8.77062 1.72145C8.59818 1.64477 8.40133 1.64477 8.22889 1.72145C8.0312 1.80935 7.87968 2.07107 7.57663 2.59451Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  collectionCardOrbit: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="362"
      height="119"
      viewBox="0 0 362 119"
      fill="none"
      {...props}
    >
      <path
        d="M27.8475 63.2481C-15.0553 87.4159 -9.18271 110.783 57.5952 117.405C133.154 121.354 231.849 104.118 297.626 72.85C363.404 41.5816 388.62 -12.3405 323.616 3.08576"
        stroke="currentColor"
        strokeWidth="0.482166"
        strokeMiterlimit="10"
      />
    </svg>
  ),
  questSolid: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      {...props}
    >
      <path
        d="M4.00691 2.10134C3.38297 2.10134 2.91749 2.24317 2.62285 2.52433C1.96301 3.15259 1.92587 4.66414 2.52257 6.56882C3.29012 9.01716 4.96386 11.7118 7.23431 14.1564C10.3788 17.5403 14.2462 19.868 16.8608 19.9489C16.9029 19.9489 16.945 19.9501 16.9883 19.9501C17.616 19.9501 18.0827 19.8083 18.3773 19.5271C19.0372 18.8989 19.0743 17.3873 18.4776 15.4826C18.0097 13.9897 17.179 12.3575 16.0747 10.7601C15.7764 10.3297 15.3691 9.96017 14.8949 9.69269C14.6139 9.5347 14.3242 9.37172 14.2215 9.3344H14.219C14.1831 9.3344 14.1286 9.33813 14.0568 9.3456C13.9516 9.39536 13.6829 9.56829 13.423 9.73499L11.3741 11.0537C11.0993 11.2304 10.7836 11.3237 10.4605 11.3237C9.86254 11.3237 9.30174 11.0002 8.99843 10.4789C8.69637 9.96141 8.69141 9.31325 8.98481 8.78825L10.1757 6.65715C10.333 6.37474 10.4964 6.08363 10.5335 5.97913C10.5335 5.95798 10.5335 5.9107 10.5224 5.81242C10.4753 5.71165 10.302 5.44044 10.1349 5.1767C10.0891 5.10579 10.0445 5.03612 9.99748 4.96769C9.63847 4.44145 9.14699 3.98736 8.57752 3.65395C6.92853 2.69103 5.35383 2.13991 4.14309 2.10259C4.09852 2.10134 4.05519 2.1001 4.01186 2.1001L4.00691 2.10134Z"
        fill="currentColor"
      />
      <path
        d="M20.4838 14.6083C19.8836 12.6926 18.7992 10.6627 17.3526 8.71099L16.4941 7.36254C15.9549 6.51526 15.8545 6.35782 15.8915 5.67879C15.8951 5.62351 15.8999 5.56702 15.9119 5.51174C15.9705 5.23772 16.1199 4.96851 16.4104 4.44813L17.5606 2.38941C17.6622 2.20673 17.453 2.00843 17.2772 2.1214L15.2985 3.39413C14.7988 3.71501 14.5405 3.88207 14.2715 3.95658C14.2177 3.971 14.1603 3.98062 14.1041 3.98663C13.4334 4.06234 13.2696 3.971 12.398 3.47826C12.227 3.38211 12.0573 3.28236 11.8887 3.18141C9.29065 1.23205 6.62925 0.0698908 4.42816 0.00258881C3.12137 -0.0346676 2.01903 0.330686 1.24667 1.0674C-0.109133 2.35936 -0.368577 4.62239 0.514969 7.44186C1.36145 10.1424 3.1668 13.0724 5.59865 15.69C9.14838 19.513 13.3533 21.949 16.5706 22.0476C16.6352 22.05 16.6998 22.05 16.7631 22.05C17.9874 22.05 19.018 21.6822 19.7533 20.9828C21.1091 19.6908 21.3686 17.4278 20.485 14.6083H20.4838ZM19.0946 20.2845C18.5027 20.8494 17.6622 21.1174 16.5993 21.0861C13.6725 20.996 9.62901 18.62 6.29688 15.0338C3.96068 12.5184 2.23065 9.71931 1.42601 7.15343C0.658441 4.70411 0.828215 2.79081 1.90306 1.76686C2.46379 1.23325 3.24452 0.962844 4.2273 0.962844C4.28349 0.962844 4.34088 0.962844 4.39827 0.965248C5.85092 1.00971 7.57856 1.61904 9.3588 2.65861C10.0857 3.08286 10.717 3.66213 11.1917 4.35919C11.2455 4.43731 11.2981 4.51783 11.3495 4.59835C11.6723 5.10432 11.8373 5.36512 11.9102 5.63793C11.9234 5.6872 11.9317 5.73888 11.9365 5.78936C12.0142 6.47079 11.9234 6.63304 11.432 7.51277L10.2818 9.57149C10.1802 9.75417 10.3894 9.95247 10.5652 9.8395L12.5439 8.56677C13.0472 8.24228 13.3067 8.07642 13.5781 8.00311C13.6271 7.98989 13.6785 7.98148 13.7287 7.97667C14.4066 7.89855 14.568 7.98989 15.4432 8.48384C16.084 8.84559 16.64 9.34314 17.0584 9.95006C18.2038 11.6074 19.0671 13.2995 19.5692 14.9016C20.3368 17.3509 20.167 19.2642 19.0922 20.2881L19.0946 20.2845Z"
        fill="currentColor"
      />
    </svg>
  ),
  arrowBack: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M12.6666 7.99998H3.33325M3.33325 7.99998L7.99992 12.6666M3.33325 7.99998L7.99992 3.33331"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowRight: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <path
        d="M4.5 12.0137H20.5M20.5 12.0137L14.5 6.01367M20.5 12.0137L14.5 18.0137"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  search: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M14 14.5L11.1 11.6M12.6667 7.83333C12.6667 10.7789 10.2789 13.1667 7.33333 13.1667C4.38781 13.1667 2 10.7789 2 7.83333C2 4.88781 4.38781 2.5 7.33333 2.5C10.2789 2.5 12.6667 4.88781 12.6667 7.83333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  copy: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  compass: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7221 8.26596C15.2107 8.10312 15.4549 8.02169 15.6174 8.07962C15.7587 8.13003 15.87 8.24127 15.9204 8.38263C15.9783 8.54507 15.8969 8.78935 15.734 9.27789L14.2465 13.7405C14.2001 13.8797 14.1769 13.9492 14.1374 14.007C14.1024 14.0582 14.0582 14.1024 14.007 14.1374C13.9492 14.1769 13.8797 14.2001 13.7405 14.2465L9.27789 15.734C8.78935 15.8969 8.54507 15.9783 8.38263 15.9204C8.24127 15.87 8.13003 15.7587 8.07962 15.6174C8.02169 15.4549 8.10312 15.2107 8.26596 14.7221L9.75351 10.2595C9.79989 10.1203 9.82308 10.0508 9.8626 9.99299C9.8976 9.94182 9.94182 9.8976 9.99299 9.8626C10.0508 9.82308 10.1203 9.79989 10.2595 9.75351L14.7221 8.26596Z"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  logo: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M15.1417 10.3585C14.7067 8.97716 13.9142 7.51158 12.8543 6.1036C12.5122 5.64888 12.189 5.17955 11.8753 4.70507C11.5349 4.19018 11.4721 4.09563 11.4893 3.67615C11.4902 3.64521 11.4928 3.61255 11.4988 3.58246C11.5314 3.41312 11.6217 3.24723 11.797 2.92317L12.4856 1.65357C12.5466 1.54097 12.4159 1.42149 12.3094 1.49197L11.1042 2.2888C10.7974 2.49166 10.6392 2.59567 10.4733 2.64295C10.4432 2.65154 10.4114 2.6567 10.3805 2.661C9.96529 2.71429 9.86472 2.661 9.32233 2.36616C9.06875 2.22863 8.81862 2.08422 8.57192 1.93466C6.86738 0.746723 5.15253 0.0461689 3.7179 0.00233059C2.79987 -0.026895 2.06064 0.218944 1.52254 0.728672C0.585608 1.61661 0.411114 3.18792 1.03087 5.15462C1.63429 7.06804 2.92193 9.14563 4.65742 11.0049C7.18714 13.7151 10.175 15.4412 12.4555 15.5108C12.5028 15.5125 12.55 15.5134 12.5965 15.5134C13.45 15.5134 14.1402 15.2684 14.6508 14.7853C15.5878 13.8974 15.7623 12.3252 15.1425 10.3585H15.1417ZM14.3543 14.4733C13.9021 14.9013 13.2695 15.1051 12.4684 15.0819C10.3315 15.0165 7.38914 13.3008 4.97116 10.7118C3.27866 8.89893 2.0254 6.87893 1.44089 5.02569C0.873566 3.22402 1.00766 1.80916 1.81824 1.03984C2.24631 0.634118 2.83769 0.429539 3.57779 0.429539C3.61991 0.429539 3.66203 0.429539 3.70415 0.431259C4.6153 0.458765 5.67257 0.787123 6.77369 1.3553C7.53957 1.74985 8.20144 2.32662 8.67851 3.04437C8.68195 3.04952 8.68538 3.05382 8.68796 3.05898C8.89082 3.36585 8.99483 3.52315 9.04211 3.68905C9.0507 3.71913 9.05586 3.75094 9.06016 3.78188C9.11345 4.19792 9.06016 4.29763 8.76532 4.84002L8.07681 6.10961C8.01578 6.22222 8.14643 6.3417 8.25302 6.27121L9.45814 5.47439C9.76501 5.27153 9.92231 5.16752 10.0882 5.12024C10.1183 5.11165 10.1501 5.10649 10.181 5.10219C10.5971 5.04804 10.6968 5.10219 11.2392 5.39616C11.8675 5.73656 12.4159 6.21276 12.8285 6.79641C13.6993 8.02904 14.3543 9.29176 14.7308 10.4866C15.2981 12.2874 15.164 13.7031 14.3534 14.4716L14.3543 14.4733Z"
        fill="currentColor"
      />
    </svg>
  ),
  flipArrow: (props: any) => (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 9.03638H7.5C5.01472 9.03638 3 11.0511 3 13.5364C3 16.0217 5.01472 18.0364 7.5 18.0364H12M21 9.03638L17 5.03638M21 9.03638L17 13.0364"
        stroke="#F5F5F6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  download: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M19 13V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V13M15 8L10 13M10 13L5 8M10 13V1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  trophy: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 15C8.68629 15 6 12.3137 6 9V3.44444C6 3.0306 6 2.82367 6.06031 2.65798C6.16141 2.38021 6.38021 2.16141 6.65798 2.06031C6.82367 2 7.0306 2 7.44444 2H16.5556C16.9694 2 17.1763 2 17.342 2.06031C17.6198 2.16141 17.8386 2.38021 17.9397 2.65798C18 2.82367 18 3.0306 18 3.44444V9C18 12.3137 15.3137 15 12 15ZM12 15V18M18 4H20.5C20.9659 4 21.1989 4 21.3827 4.07612C21.6277 4.17761 21.8224 4.37229 21.9239 4.61732C22 4.80109 22 5.03406 22 5.5V6C22 6.92997 22 7.39496 21.8978 7.77646C21.6204 8.81173 20.8117 9.62038 19.7765 9.89778C19.395 10 18.93 10 18 10M6 4H3.5C3.03406 4 2.80109 4 2.61732 4.07612C2.37229 4.17761 2.17761 4.37229 2.07612 4.61732C2 4.80109 2 5.03406 2 5.5V6C2 6.92997 2 7.39496 2.10222 7.77646C2.37962 8.81173 3.18827 9.62038 4.22354 9.89778C4.60504 10 5.07003 10 6 10M7.44444 22H16.5556C16.801 22 17 21.801 17 21.5556C17 19.5919 15.4081 18 13.4444 18H10.5556C8.59188 18 7 19.5919 7 21.5556C7 21.801 7.19898 22 7.44444 22Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  info: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <path
        d="M11 15V11M11 7H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plus: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  home: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 16C13.6569 16 15 14.6568 15 13C15 11.3431 13.6569 9.99998 12 9.99998C10.3431 9.99998 9 11.3431 9 13C9 14.6568 10.3431 16 12 16Z"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10.5651C3 9.9907 3 9.70352 3.07403 9.43905C3.1396 9.20478 3.24737 8.98444 3.39203 8.78886C3.55534 8.56806 3.78202 8.39175 4.23539 8.03912L11.0177 2.764C11.369 2.49075 11.5447 2.35412 11.7387 2.3016C11.9098 2.25526 12.0902 2.25526 12.2613 2.3016C12.4553 2.35412 12.631 2.49075 12.9823 2.764L19.7646 8.03913C20.218 8.39175 20.4447 8.56806 20.608 8.78886C20.7526 8.98444 20.8604 9.20478 20.926 9.43905C21 9.70352 21 9.9907 21 10.5651V17.8C21 18.9201 21 19.4801 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4801 3 18.9201 3 17.8V10.5651Z"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  star: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M9.56144 1.04257C9.69699 0.614308 10.303 0.614312 10.4386 1.04257L12.2579 6.79071C12.4013 7.24377 12.7562 7.59869 13.2093 7.74209L18.9574 9.56144C19.3857 9.69699 19.3857 10.303 18.9574 10.4386L13.2093 12.2579C12.7562 12.4013 12.4013 12.7562 12.2579 13.2093L10.4386 18.9574C10.303 19.3857 9.69699 19.3857 9.56144 18.9574L7.74209 13.2093C7.59869 12.7562 7.24377 12.4013 6.79071 12.2579L1.04257 10.4386C0.614308 10.303 0.614312 9.69699 1.04257 9.56144L6.79071 7.74209C7.24377 7.59869 7.59869 7.24377 7.74209 6.79071L9.56144 1.04257Z"
        stroke="#F5F5F6"
      />
    </svg>
  ),
  arrowUp: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      {...props}
    >
      <path
        d="M12.5 10L8.5 6L4.5 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  starSolid: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M9.56144 1.04257C9.69699 0.614308 10.303 0.614312 10.4386 1.04257L12.2579 6.79071C12.4013 7.24377 12.7562 7.59869 13.2093 7.74209L18.9574 9.56144C19.3857 9.69699 19.3857 10.303 18.9574 10.4386L13.2093 12.2579C12.7562 12.4013 12.4013 12.7562 12.2579 13.2093L10.4386 18.9574C10.303 19.3857 9.69699 19.3857 9.56144 18.9574L7.74209 13.2093C7.59869 12.7562 7.24377 12.4013 6.79071 12.2579L1.04257 10.4386C0.614308 10.303 0.614312 9.69699 1.04257 9.56144L6.79071 7.74209C7.24377 7.59869 7.59869 7.24377 7.74209 6.79071L9.56144 1.04257Z"
        fill="#F5F5F6"
        stroke="#F5F5F6"
      />
    </svg>
  ),
  homeSolid: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <mask id="path-1-inside-1_542_19048" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03915L19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905ZM12 16C13.6569 16 15 14.6568 15 13C15 11.3431 13.6569 9.99997 12 9.99997C10.3431 9.99997 9 11.3431 9 13C9 14.6568 10.3431 16 12 16Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03915L19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905ZM12 16C13.6569 16 15 14.6568 15 13C15 11.3431 13.6569 9.99997 12 9.99997C10.3431 9.99997 9 11.3431 9 13C9 14.6568 10.3431 16 12 16Z"
        fill="#F5F5F6"
      />
      <path
        d="M3.07403 9.43905L4.03701 9.7086L4.03701 9.7086L3.07403 9.43905ZM3.21799 19.908L2.32698 20.362H2.32698L3.21799 19.908ZM4.09202 20.782L3.63803 21.673H3.63803L4.09202 20.782ZM19.908 20.782L20.362 21.673L20.362 21.673L19.908 20.782ZM20.782 19.908L21.673 20.362L21.673 20.362L20.782 19.908ZM20.926 9.43905L19.963 9.7086V9.7086L20.926 9.43905ZM20.608 8.78886L19.804 9.3835V9.3835L20.608 8.78886ZM19.7646 8.03915L19.1399 8.82009L19.1507 8.8285L19.7646 8.03915ZM19.7646 8.03913L20.3894 7.25818L20.3786 7.24977L19.7646 8.03913ZM12.9823 2.764L12.3684 3.55335L12.3684 3.55335L12.9823 2.764ZM12.2613 2.3016L12.5227 1.33636V1.33636L12.2613 2.3016ZM11.7387 2.3016L11.4773 1.33636V1.33636L11.7387 2.3016ZM11.0177 2.764L10.4038 1.97465V1.97465L11.0177 2.764ZM4.23539 8.03912L4.84933 8.82848H4.84933L4.23539 8.03912ZM3.39203 8.78886L2.58804 8.19421H2.58804L3.39203 8.78886ZM4 10.5651C4 9.93406 4.00869 9.8098 4.03701 9.7086L2.11104 9.1695C1.99131 9.59724 2 10.0473 2 10.5651H4ZM4 17.8V10.5651H2V17.8H4ZM4.10899 19.454C4.0838 19.4045 4.04612 19.3038 4.02393 19.0321C4.00078 18.7488 4 18.3765 4 17.8H2C2 18.3435 1.99922 18.8113 2.03057 19.195C2.06287 19.5904 2.13419 19.9836 2.32698 20.362L4.10899 19.454ZM4.54601 19.891C4.35785 19.7951 4.20487 19.6421 4.10899 19.454L2.32698 20.362C2.6146 20.9264 3.07354 21.3854 3.63803 21.673L4.54601 19.891ZM6.2 20C5.62345 20 5.25117 19.9992 4.96784 19.9761C4.69617 19.9539 4.59545 19.9162 4.54601 19.891L3.63803 21.673C4.01641 21.8658 4.40963 21.9371 4.80497 21.9694C5.18864 22.0008 5.65645 22 6.2 22V20ZM17.8 20H6.2V22H17.8V20ZM19.454 19.891C19.4045 19.9162 19.3038 19.9539 19.0322 19.9761C18.7488 19.9992 18.3766 20 17.8 20V22C18.3436 22 18.8114 22.0008 19.195 21.9694C19.5904 21.9371 19.9836 21.8658 20.362 21.673L19.454 19.891ZM19.891 19.454C19.7951 19.6421 19.6422 19.7951 19.454 19.891L20.362 21.673C20.9265 21.3854 21.3854 20.9264 21.673 20.362L19.891 19.454ZM20 17.8C20 18.3765 19.9992 18.7488 19.9761 19.0321C19.9539 19.3038 19.9162 19.4045 19.891 19.454L21.673 20.362C21.8658 19.9836 21.9371 19.5904 21.9694 19.195C22.0008 18.8113 22 18.3435 22 17.8H20ZM20 10.5651V17.8H22V10.5651H20ZM19.963 9.7086C19.9913 9.8098 20 9.93406 20 10.5651H22C22 10.0473 22.0087 9.59724 21.889 9.1695L19.963 9.7086ZM19.804 9.3835C19.8763 9.4813 19.9302 9.59147 19.963 9.7086L21.889 9.1695C21.7906 8.8181 21.629 8.48759 21.412 8.19421L19.804 9.3835ZM19.1507 8.8285C19.6488 9.21587 19.7415 9.29902 19.804 9.3835L21.412 8.19421C21.1478 7.8371 20.7872 7.56763 20.3786 7.2498L19.1507 8.8285ZM19.1399 8.81999L19.1399 8.82002L20.3893 7.25828L20.3893 7.25826L19.1399 8.81999ZM12.3684 3.55335L19.1507 8.82848L20.3786 7.24977L13.5962 1.97465L12.3684 3.55335ZM12 3.26685C11.9521 3.25389 11.9426 3.23832 12.0073 3.28153C12.0825 3.33174 12.1815 3.40798 12.3684 3.55335L13.5962 1.97465C13.3179 1.75817 12.958 1.45422 12.5227 1.33636L12 3.26685ZM12 3.26685L12.5227 1.33636C12.1804 1.24368 11.8196 1.24368 11.4773 1.33636L12 3.26685ZM11.6316 3.55335C11.8185 3.40798 11.9175 3.33174 11.9927 3.28153C12.0574 3.23832 12.0479 3.25389 12 3.26685L11.4773 1.33636C11.042 1.45422 10.6821 1.75817 10.4038 1.97465L11.6316 3.55335ZM4.84933 8.82848L11.6316 3.55335L10.4038 1.97465L3.62145 7.24977L4.84933 8.82848ZM4.19601 9.3835C4.2585 9.29901 4.35126 9.21587 4.84933 8.82848L3.62145 7.24977C3.21278 7.56762 2.85217 7.8371 2.58804 8.19421L4.19601 9.3835ZM4.03701 9.7086C4.0698 9.59147 4.12368 9.4813 4.19601 9.3835L2.58804 8.19421C2.37105 8.48759 2.2094 8.8181 2.11104 9.1695L4.03701 9.7086ZM14 13C14 14.1045 13.1046 15 12 15V17C14.2091 17 16 15.2091 16 13H14ZM12 11C13.1046 11 14 11.8954 14 13H16C16 10.7908 14.2091 8.99997 12 8.99997V11ZM10 13C10 11.8954 10.8954 11 12 11V8.99997C9.79086 8.99997 8 10.7908 8 13H10ZM12 15C10.8954 15 10 14.1045 10 13H8C8 15.2091 9.79086 17 12 17V15Z"
        fill="#F5F5F6"
        mask="url(#path-1-inside-1_542_19048)"
      />
    </svg>
  ),
  bubble: (props: any) => (
    <svg
      width={166}
      height={32}
      viewBox="0 0 166 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.5 8C0.5 3.58172 4.08172 0 8.5 0H150.5C154.918 0 158.5 3.58172 158.5 8V13L165.5 16L158.5 19V24C158.5 28.4183 154.918 32 150.5 32H83.5H79.5H75.5H8.5C4.08172 32 0.5 28.4183 0.5 24V8Z"
        fill="currentColor"
      />
    </svg>
  ),
  jubmojis: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8833 1.25575C11.5644 0.248081 10.1384 0.248083 9.81948 1.25575L8.80416 4.46362C8.79607 4.48918 8.77605 4.5092 8.75049 4.51729L5.54263 5.53261C4.53496 5.85155 4.53496 7.27749 5.54263 7.59643L8.75049 8.61175C8.77605 8.61984 8.79607 8.63986 8.80416 8.66542L9.81948 11.8733C10.1384 12.881 11.5644 12.881 11.8833 11.8733L12.8986 8.66542C12.9067 8.63986 12.9267 8.61984 12.9523 8.61175L16.1602 7.59643C17.1678 7.27749 17.1678 5.85155 16.1602 5.53261L12.9523 4.51729C12.9267 4.5092 12.9067 4.48918 12.8986 4.46362L11.8833 1.25575ZM10.7729 1.55751C10.782 1.52874 10.7936 1.51888 10.8009 1.5139C10.8114 1.50667 10.8289 1.5 10.8514 1.5C10.8739 1.5 10.8914 1.50667 10.9019 1.5139C10.9091 1.51888 10.9208 1.52874 10.9299 1.55751L11.9452 4.76537C12.0515 5.10125 12.3147 5.36437 12.6505 5.47067L15.8584 6.486C15.8872 6.4951 15.897 6.50676 15.902 6.51402C15.9092 6.52455 15.9159 6.54204 15.9159 6.56452C15.9159 6.587 15.9092 6.60449 15.902 6.61502C15.897 6.62227 15.8872 6.63394 15.8584 6.64304L12.6505 7.65837C12.3147 7.76467 12.0515 8.02779 11.9452 8.36367L10.9299 11.5715C10.9208 11.6003 10.9091 11.6102 10.9019 11.6151C10.8914 11.6224 10.8739 11.629 10.8514 11.629C10.8289 11.629 10.8114 11.6224 10.8009 11.6151C10.7936 11.6102 10.782 11.6003 10.7729 11.5715L9.75755 8.36367C9.65124 8.02779 9.38812 7.76467 9.05225 7.65837L5.84438 6.64304C5.81561 6.63394 5.80575 6.62227 5.80077 6.61502C5.79354 6.60449 5.78687 6.587 5.78687 6.56452C5.78687 6.54204 5.79354 6.52455 5.80077 6.51402C5.80575 6.50676 5.81561 6.4951 5.84438 6.486L9.05225 5.47067C9.38812 5.36437 9.65124 5.10125 9.75755 4.76537L10.7729 1.55751ZM21.6422 15.3772L21.6427 15.3781C21.7545 15.5491 21.8104 15.7811 21.7784 16.0188C21.7464 16.2562 21.6353 16.4408 21.5061 16.5483L21.5058 16.5485L16.1664 20.978L16.1653 20.9788C15.6273 21.422 14.995 21.6497 14.3601 21.6517H1V17.9546H2.82324H3.21109L3.49752 17.6931L5.33658 16.0139L5.33697 16.0135C5.99254 15.4161 6.79065 15.1063 7.59514 15.1065H7.59537H13.9255H13.9257C13.9451 15.1065 13.9689 15.111 13.9968 15.1255C14.0253 15.1404 14.0607 15.1674 14.0948 15.2128C14.1292 15.2585 14.1594 15.3193 14.1774 15.3928C14.1953 15.4664 14.199 15.5453 14.1875 15.6223L14.1873 15.6238C14.1542 15.8473 13.9802 15.9546 13.8563 15.9546H10.7608C10.2872 15.9546 9.86049 16.1673 9.56581 16.4988C9.27454 16.8265 9.12781 17.2482 9.12781 17.6667C9.12781 18.0853 9.27454 18.507 9.56581 18.8347C9.86049 19.1662 10.2872 19.3789 10.7608 19.3789H15.5326H15.8931L16.1708 19.1487L20.9053 15.224L20.9071 15.2224C20.97 15.1701 21.0345 15.1378 21.0952 15.1209C21.1554 15.104 21.2159 15.1011 21.2752 15.1112C21.3347 15.1213 21.3982 15.1456 21.4614 15.1886C21.525 15.2318 21.588 15.2941 21.6422 15.3772ZM16.8025 21.7495L22.1448 17.3178C22.482 17.0377 22.7066 16.6186 22.7694 16.1524C22.8323 15.6862 22.7281 15.211 22.4799 14.8311C22.3569 14.6424 22.202 14.483 22.0241 14.3619C21.8461 14.2408 21.6487 14.1604 21.4431 14.1254C21.2375 14.0904 21.0278 14.1014 20.826 14.1578C20.6241 14.2142 20.4342 14.3149 20.2671 14.4541L15.5326 18.3789H10.7608C10.5929 18.3789 10.4319 18.3038 10.3132 18.1703C10.1945 18.0367 10.1278 17.8556 10.1278 17.6667C10.1278 17.4779 10.1945 17.2967 10.3132 17.1632C10.4319 17.0296 10.5929 16.9546 10.7608 16.9546H13.8563C14.4893 16.9546 15.0728 16.4708 15.1765 15.7702C15.2071 15.5656 15.1977 15.356 15.1489 15.156C15.1001 14.9559 15.0132 14.7702 14.8941 14.6119C14.775 14.4535 14.6266 14.3262 14.4594 14.2389C14.2921 14.1516 14.1099 14.1064 13.9255 14.1065H7.59537C6.52774 14.1062 5.49245 14.5187 4.66293 15.2748L2.82324 16.9546H0.633013C0.46548 16.9559 0.305132 17.0313 0.186665 17.1646C0.0681984 17.2979 0.00114008 17.4783 0 17.6667V21.9396C0.00114008 22.128 0.0681984 22.3084 0.186665 22.4417C0.305132 22.575 0.46548 22.6504 0.633013 22.6517H14.3615C15.2396 22.6494 16.0943 22.3335 16.8025 21.7495Z"
        fill="currentColor"
      />
    </svg>
  ),
  jubmojisSolid: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6402 1.40663C11.4686 0.864457 10.7013 0.864455 10.5297 1.40663L9.47868 4.72735C9.42148 4.90807 9.27991 5.04964 9.0992 5.10683L5.77848 6.15788C5.2363 6.32948 5.2363 7.09671 5.77848 7.26831L9.0992 8.31935C9.27991 8.37655 9.42148 8.51812 9.47868 8.69884L10.5297 12.0196C10.7013 12.5617 11.4686 12.5617 11.6402 12.0196L12.6912 8.69884C12.7484 8.51812 12.89 8.37655 13.0707 8.31935L16.3914 7.26831C16.9336 7.09671 16.9336 6.32948 16.3914 6.15788L13.0707 5.10684C12.89 5.04964 12.7484 4.90807 12.6912 4.72735L11.6402 1.40663ZM22.4975 14.6781C22.6792 14.8018 22.8374 14.9647 22.9631 15.1574C23.2167 15.5455 23.323 16.0309 23.2589 16.5071C23.1947 16.9833 22.9652 17.4114 22.6208 17.6975L17.1637 22.2245C16.4402 22.821 15.5671 23.1437 14.6702 23.1461H0.64662C0.475485 23.1448 0.311691 23.0677 0.190677 22.9316C0.0696643 22.7955 0.00116458 22.6112 0 22.4187V18.054C0.00116458 17.8615 0.0696643 17.6772 0.190677 17.5411C0.311691 17.4049 0.475485 17.3279 0.64662 17.3265H2.88392L4.76316 15.6107C5.61051 14.8383 6.66805 14.417 7.75863 14.4172H14.2248C14.4132 14.4172 14.5993 14.4634 14.7702 14.5525C14.941 14.6417 15.0926 14.7717 15.2142 14.9335C15.3359 15.0952 15.4247 15.2849 15.4745 15.4893C15.5243 15.6936 15.534 15.9077 15.5027 16.1167C15.3968 16.8323 14.8007 17.3265 14.1541 17.3265H10.9921C10.8206 17.3265 10.6562 17.4032 10.5349 17.5396C10.4136 17.676 10.3455 17.8611 10.3455 18.054C10.3455 18.2469 10.4136 18.4319 10.5349 18.5684C10.6562 18.7048 10.8206 18.7814 10.9921 18.7814H15.8664L20.7027 14.7723C20.8735 14.6301 21.0675 14.5272 21.2736 14.4696C21.4798 14.412 21.694 14.4007 21.904 14.4365C22.1141 14.4723 22.3157 14.5544 22.4975 14.6781Z"
        fill="currentColor"
      />
    </svg>
  ),
  power: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      {...props}
    >
      <path
        d="M10.6364 4.54257C10.772 4.11431 11.378 4.11431 11.5136 4.54257L13.1105 9.5881C13.2539 10.0412 13.6088 10.3961 14.0619 10.5395L19.1074 12.1364C19.5357 12.272 19.5357 12.878 19.1074 13.0136L14.0619 14.6105C13.6088 14.7539 13.2539 15.1088 13.1105 15.5619L11.5136 20.6074C11.378 21.0357 10.772 21.0357 10.6364 20.6074L9.03948 15.5619C8.89608 15.1088 8.54116 14.7539 8.0881 14.6105L3.04257 13.0136C2.61431 12.878 2.61431 12.272 3.04257 12.1364L8.0881 10.5395C8.54116 10.3961 8.89608 10.0412 9.03948 9.5881L10.6364 4.54257Z"
        stroke="currentColor"
      />
      <path
        d="M3.42066 3.62342L3.96183 1.91362L4.50299 3.62342C4.57356 3.84635 4.7482 4.021 4.97114 4.09156L6.68093 4.63273L4.97114 5.17389C4.7482 5.24445 4.57356 5.4191 4.50299 5.64204L3.96183 7.35183L3.42066 5.64203C3.3501 5.4191 3.17545 5.24445 2.95252 5.17389L1.24272 4.63273L2.95252 4.09156C3.17545 4.021 3.3501 3.84635 3.42066 3.62342Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M3.42066 19.566L3.96183 17.8562L4.50299 19.566C4.57356 19.789 4.7482 19.9636 4.97114 20.0342L6.68093 20.5754L4.97114 21.1165C4.7482 21.1871 4.57356 21.3617 4.50299 21.5847L3.96183 23.2945L3.42066 21.5847C3.3501 21.3617 3.17545 21.1871 2.95252 21.1165L1.24272 20.5754L2.95252 20.0342C3.17545 19.9636 3.3501 19.789 3.42066 19.566Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  ),
  powerSolid: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      {...props}
    >
      <path
        d="M10.1597 4.39169C10.4426 3.49794 11.7074 3.49794 11.9902 4.39169L13.5872 9.43722C13.6815 9.73512 13.9149 9.9685 14.2128 10.0628L19.2583 11.6597C20.1521 11.9426 20.1521 13.2074 19.2583 13.4902L14.2128 15.0872C13.9149 15.1815 13.6815 15.4149 13.5872 15.7128L11.9902 20.7583C11.7074 21.6521 10.4426 21.6521 10.1597 20.7583L8.56279 15.7128C8.4685 15.4149 8.23512 15.1815 7.93722 15.0872L2.89169 13.4902C1.99794 13.2074 1.99794 11.9426 2.89169 11.6597L7.93722 10.0628C8.23512 9.9685 8.4685 9.73512 8.56279 9.43722L10.1597 4.39169Z"
        fill="currentColor"
      />
      <path
        d="M3.63442 1.70533C3.73561 1.38561 4.18804 1.38561 4.28924 1.70533L4.86051 3.51026C4.89424 3.61682 4.97773 3.70031 5.0843 3.73404L6.88922 4.30532C7.20894 4.40651 7.20894 4.85894 6.88922 4.96013L5.08429 5.53141C4.97773 5.56514 4.89424 5.64863 4.86051 5.75519L4.28924 7.56012C4.18804 7.87984 3.73561 7.87984 3.63442 7.56012L3.06314 5.75519C3.02941 5.64863 2.94593 5.56514 2.83936 5.53141L1.03443 4.96013C0.714716 4.85894 0.714716 4.40651 1.03443 4.30532L2.83936 3.73404C2.94593 3.70031 3.02941 3.61682 3.06314 3.51026L3.63442 1.70533Z"
        fill="currentColor"
      />
      <path
        d="M3.63442 17.648C3.73561 17.3282 4.18804 17.3282 4.28924 17.648L4.86051 19.4529C4.89424 19.5595 4.97773 19.6429 5.0843 19.6767L6.88922 20.2479C7.20894 20.3491 7.20894 20.8016 6.88922 20.9028L5.08429 21.474C4.97773 21.5078 4.89424 21.5913 4.86051 21.6978L4.28924 23.5027C4.18804 23.8225 3.73561 23.8225 3.63442 23.5027L3.06314 21.6978C3.02941 21.5913 2.94593 21.5078 2.83936 21.474L1.03443 20.9028C0.714716 20.8016 0.714716 20.3491 1.03443 20.2479L2.83936 19.6767C2.94593 19.6429 3.02941 19.5595 3.06314 19.4529L3.63442 17.648Z"
        fill="currentColor"
      />
    </svg>
  ),
  chevron: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#F5F5F6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  locked: (props: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      {...props}
    >
      <path
        d="M3.10102 7.5H3V5.5C3 2.73858 5.23858 0.5 8 0.5C10.7614 0.5 13 2.73858 13 5.5V7.5H12.899M8 11.5V13.5M15 12.5C15 16.366 11.866 19.5 8 19.5C4.13401 19.5 1 16.366 1 12.5C1 8.63401 4.13401 5.5 8 5.5C11.866 5.5 15 8.63401 15 12.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
