import { Link } from "react-router";
import { settingsContainer, settingsLink, settingsLinksContainer, settingsLogOut, settingsUser } from "../../../assets/styles/settings.css";
import { HOME_PATH } from "../../../navigation/navigation-routes-names";

const SettingsComponent = () => {
    return (
        <div className={settingsContainer}>
            <div className={settingsUser}>
                <p>Jose Luis</p>
                <p>torres@mailinator.com</p>
            </div>

            <div className={settingsLinksContainer}>
                <Link
                    to={HOME_PATH}
                    className={settingsLink}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0026 0.833374C6.2537 0.833374 4.83594 2.25114 4.83594 4.00004C4.83594 5.74894 6.2537 7.16671 8.0026 7.16671C9.7515 7.16671 11.1693 5.74894 11.1693 4.00004C11.1693 2.25114 9.7515 0.833374 8.0026 0.833374ZM5.83594 4.00004C5.83594 2.80342 6.80599 1.83337 8.0026 1.83337C9.19922 1.83337 10.1693 2.80342 10.1693 4.00004C10.1693 5.19666 9.19922 6.16671 8.0026 6.16671C6.80599 6.16671 5.83594 5.19666 5.83594 4.00004Z" fill="#2E2E27" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0026 8.16671C6.64305 8.16671 5.38762 8.48054 4.4547 9.01363C3.53594 9.53864 2.83594 10.3401 2.83594 11.3334C2.83594 12.3266 3.53594 13.1281 4.4547 13.6531C5.38762 14.1862 6.64305 14.5 8.0026 14.5C9.36216 14.5 10.6176 14.1862 11.5505 13.6531C12.4693 13.1281 13.1693 12.3266 13.1693 11.3334C13.1693 10.3401 12.4693 9.53864 11.5505 9.01363C10.6176 8.48054 9.36216 8.16671 8.0026 8.16671ZM3.83594 11.3334C3.83594 10.8539 4.18061 10.322 4.95084 9.88188C5.70693 9.44983 6.78483 9.16671 8.0026 9.16671C9.22038 9.16671 10.2983 9.44983 11.0544 9.88188C11.8246 10.322 12.1693 10.8539 12.1693 11.3334C12.1693 11.8129 11.8246 12.3447 11.0544 12.7849C10.2983 13.2169 9.22038 13.5 8.0026 13.5C6.78483 13.5 5.70693 13.2169 4.95084 12.7849C4.18061 12.3447 3.83594 11.8129 3.83594 11.3334Z" fill="#2E2E27" />
                    </svg>


                    Account Information
                </Link>
                <Link
                    to={HOME_PATH}
                    className={settingsLink}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.683 6.91552C13.4358 6.48755 12.983 6.34686 12.5507 6.28641C12.1149 6.22548 11.5316 6.22549 10.8261 6.22552L10.786 6.22552C10.3659 6.22552 10.0913 6.22137 9.8912 6.19356C9.71024 6.1684 9.6527 6.13116 9.62815 6.10944C9.61016 6.0907 9.57814 6.04688 9.55632 5.8889C9.53059 5.70263 9.52947 5.4472 9.52947 5.03782V4.78816C9.52949 3.72981 9.5295 2.88199 9.44805 2.27753C9.37159 1.71015 9.18985 1.07292 8.5604 0.880027C7.942 0.690519 7.42332 1.09689 7.02016 1.51583C6.59067 1.96213 6.08048 2.65243 5.44169 3.51672L3.35036 6.34626C2.94347 6.89673 2.60428 7.35562 2.40218 7.73508C2.19959 8.11546 2.05215 8.56709 2.27687 9.01765L2.27765 9.01931L2.28002 9.02413L2.28271 9.02946L2.28536 9.03457L2.28826 9.04002L2.29121 9.04545L2.294 9.05047L2.29695 9.05564L2.29965 9.06026L2.30064 9.06189C2.54564 9.48621 2.99655 9.63475 3.43279 9.70135C3.88234 9.76999 4.48219 9.77439 5.20969 9.77439C5.63409 9.77439 5.90471 9.77534 6.10345 9.80068C6.27902 9.82307 6.33153 9.85758 6.35404 9.87748C6.37397 9.8983 6.40893 9.94693 6.43359 10.1107C6.4618 10.298 6.46623 10.5574 6.46622 10.9621L6.46622 11.2117C6.46619 12.27 6.46616 13.1179 6.54761 13.7223C6.62405 14.2897 6.80578 14.9269 7.43524 15.1199C8.05364 15.3094 8.57232 14.903 8.97549 14.4841C9.40499 14.0378 9.9152 13.3474 10.554 12.4831L12.6202 9.68759C13.0408 9.11863 13.3866 8.64329 13.5906 8.24768C13.7902 7.86051 13.9294 7.40625 13.7068 6.95982L13.706 6.95821L13.7036 6.95336L13.7009 6.94801L13.6983 6.94288L13.6954 6.9374L13.6924 6.93196L13.6896 6.92692L13.6866 6.92173L13.6839 6.91709L13.683 6.91552ZM7.7407 2.20924C7.36206 2.6027 6.89022 3.23931 6.22106 4.14468L4.17963 6.90671C3.74117 7.49994 3.44781 7.8991 3.2848 8.20517C3.20546 8.35414 3.17567 8.44812 3.16719 8.50501C3.16195 8.54014 3.16515 8.55601 3.16934 8.56617C3.18546 8.58994 3.25547 8.66269 3.58372 8.71281C3.94232 8.76756 4.45793 8.77439 5.20969 8.77439L5.24034 8.77439C5.62509 8.77436 5.96034 8.77434 6.22992 8.80871C6.51871 8.84553 6.80557 8.92926 7.04308 9.15264L7.04697 9.1563L7.05078 9.16003C7.28412 9.38907 7.37897 9.67306 7.42244 9.96174C7.46399 10.2376 7.46623 10.577 7.46622 10.9621L7.46622 11.1685C7.4662 12.2798 7.46732 13.0594 7.53865 13.5888C7.57417 13.8524 7.62195 14.007 7.66769 14.0934C7.70198 14.1581 7.72171 14.1623 7.72725 14.1635L7.72825 14.1637L7.72926 14.1641C7.73624 14.1665 7.76081 14.175 7.8366 14.1368C7.93127 14.0892 8.06649 13.9865 8.25495 13.7906C8.6336 13.3972 9.10545 12.7606 9.77463 11.8552L11.8161 9.09321C12.252 8.50335 12.5425 8.09835 12.7018 7.78944C12.8383 7.52468 12.8234 7.43502 12.8143 7.41121C12.7993 7.38934 12.7321 7.32151 12.4122 7.27678C12.0541 7.22671 11.5418 7.22552 10.786 7.22552C10.3841 7.22552 10.0355 7.22324 9.75349 7.18403C9.46227 7.14354 9.17473 7.05588 8.93928 6.83444L8.93539 6.83078L8.93158 6.82705C8.69611 6.59592 8.6053 6.31229 8.56572 6.02571C8.52941 5.76282 8.52944 5.43728 8.52947 5.07005L8.52947 4.83135C8.52947 3.72009 8.52834 2.94045 8.45701 2.41108C8.42148 2.14748 8.3737 1.99286 8.32796 1.90651C8.29367 1.8418 8.27394 1.83757 8.2684 1.83638L8.2674 1.83614L8.26639 1.8358C8.25941 1.83339 8.23484 1.82491 8.15905 1.86305C8.06438 1.91068 7.92916 2.01341 7.7407 2.20924Z" fill="#2E2E27" />
                    </svg>

                    Status automation
                </Link>
                <Link
                    to={HOME_PATH}
                    className={settingsLink}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99642 5.50004C6.61571 5.50004 5.49642 6.61933 5.49642 8.00004C5.49642 9.38075 6.61571 10.5 7.99642 10.5C9.37713 10.5 10.4964 9.38075 10.4964 8.00004C10.4964 6.61933 9.37713 5.50004 7.99642 5.50004ZM6.49642 8.00004C6.49642 7.17161 7.16799 6.50004 7.99642 6.50004C8.82485 6.50004 9.49642 7.17161 9.49642 8.00004C9.49642 8.82847 8.82485 9.50004 7.99642 9.50004C7.16799 9.50004 6.49642 8.82847 6.49642 8.00004Z" fill="#434343" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.97958 0.833374C7.68327 0.833369 7.43591 0.833365 7.23284 0.847221C7.02144 0.861645 6.82175 0.89274 6.62816 0.972929C6.17894 1.159 5.82204 1.5159 5.63597 1.96512C5.5391 2.19898 5.51286 2.44545 5.50285 2.71335C5.49479 2.9287 5.38611 3.10838 5.22572 3.20098C5.06533 3.29358 4.85539 3.29786 4.66486 3.19716C4.42784 3.07189 4.20128 2.97137 3.95031 2.93833C3.46824 2.87486 2.9807 3.0055 2.59495 3.3015C2.42871 3.42906 2.30193 3.58644 2.18374 3.76231C2.07021 3.93125 1.94653 4.14547 1.79838 4.40208L1.78154 4.43125C1.63339 4.68785 1.5097 4.90207 1.42017 5.08486C1.32696 5.27515 1.25405 5.46363 1.22669 5.67138C1.16323 6.15345 1.29386 6.64099 1.58986 7.02674C1.74394 7.22754 1.94424 7.37348 2.1712 7.51609C2.35372 7.63077 2.455 7.81478 2.45499 8.00003C2.45498 8.18526 2.3537 8.36924 2.1712 8.48391C1.94421 8.62653 1.74389 8.77248 1.5898 8.97329C1.2938 9.35905 1.16316 9.84658 1.22663 10.3287C1.25398 10.5364 1.32689 10.7249 1.4201 10.9152C1.50964 11.098 1.63332 11.3122 1.78147 11.5688L1.79831 11.5979C1.94646 11.8546 2.07014 12.0688 2.18368 12.2377C2.30187 12.4136 2.42864 12.571 2.59488 12.6985C2.98063 12.9945 3.46817 13.1252 3.95024 13.0617C4.2012 13.0287 4.42775 12.9282 4.66475 12.8029C4.85531 12.7022 5.06528 12.7065 5.22569 12.7991C5.3861 12.8917 5.49479 13.0714 5.50285 13.2868C5.51287 13.5547 5.5391 13.8011 5.63597 14.035C5.82204 14.4842 6.17894 14.8411 6.62816 15.0272C6.82175 15.1073 7.02144 15.1384 7.23284 15.1529C7.43591 15.1667 7.68327 15.1667 7.97958 15.1667H8.01325C8.30956 15.1667 8.55692 15.1667 8.75999 15.1529C8.97139 15.1384 9.17107 15.1073 9.36467 15.0272C9.81388 14.8411 10.1708 14.4842 10.3569 14.035C10.4537 13.8011 10.48 13.5546 10.49 13.2867C10.498 13.0714 10.6067 12.8917 10.7671 12.7991C10.9275 12.7064 11.1375 12.7022 11.328 12.8029C11.565 12.9281 11.7916 13.0286 12.0425 13.0617C12.5246 13.1251 13.0121 12.9945 13.3979 12.6985C13.5641 12.5709 13.6909 12.4135 13.8091 12.2377C13.9226 12.0687 14.0463 11.8545 14.1944 11.598L14.2113 11.5688C14.3594 11.3122 14.4831 11.0979 14.5727 10.9151C14.6659 10.7248 14.7388 10.5364 14.7661 10.3286C14.8296 9.84654 14.699 9.359 14.403 8.97325C14.2489 8.77244 14.0486 8.62649 13.8216 8.48388C13.6391 8.36921 13.5378 8.18523 13.5378 8.00001C13.5378 7.81481 13.6391 7.63085 13.8216 7.5162C14.0486 7.37357 14.2489 7.22762 14.403 7.02679C14.699 6.64103 14.8297 6.1535 14.7662 5.67143C14.7388 5.46368 14.6659 5.2752 14.5727 5.08491C14.4832 4.90212 14.3595 4.68793 14.2114 4.43134L14.1945 4.40216C14.0464 4.14554 13.9227 3.9313 13.8091 3.76235C13.691 3.58649 13.5642 3.42911 13.3979 3.30154C13.0122 3.00554 12.5247 2.87491 12.0426 2.93838C11.7916 2.97141 11.5651 3.07192 11.3281 3.19718C11.1375 3.2979 10.9275 3.29361 10.7671 3.201C10.6067 3.10839 10.498 2.92869 10.49 2.71331C10.48 2.44543 10.4537 2.19897 10.3569 1.96512C10.1708 1.5159 9.81388 1.159 9.36467 0.972929C9.17107 0.89274 8.97139 0.861645 8.75999 0.847221C8.55691 0.833365 8.30956 0.833369 8.01325 0.833374H7.97958ZM7.01084 1.89681C7.06228 1.8755 7.14042 1.85585 7.30091 1.8449C7.46588 1.83365 7.67895 1.83337 7.99641 1.83337C8.31388 1.83337 8.52694 1.83365 8.69192 1.8449C8.8524 1.85585 8.93055 1.8755 8.98198 1.89681C9.18617 1.98139 9.3484 2.14362 9.43298 2.3478C9.45966 2.41221 9.48178 2.51262 9.49068 2.75069C9.51044 3.27894 9.7831 3.78757 10.2671 4.06703C10.7512 4.34649 11.328 4.32831 11.7954 4.08129C12.006 3.96997 12.104 3.93892 12.1731 3.92982C12.3922 3.90097 12.6138 3.96035 12.7892 4.0949C12.8334 4.12879 12.8894 4.18664 12.9792 4.32015C13.0714 4.45739 13.1782 4.64177 13.3369 4.91671C13.4956 5.19164 13.6019 5.3763 13.6747 5.5248C13.7454 5.66926 13.7675 5.74676 13.7748 5.80195C13.8036 6.02108 13.7442 6.24268 13.6097 6.41803C13.5672 6.47334 13.4913 6.5427 13.2896 6.66946C12.842 6.95068 12.5379 7.44107 12.5378 7.99996C12.5378 8.55889 12.842 9.04936 13.2896 9.33061C13.4913 9.45735 13.5672 9.5267 13.6096 9.58201C13.7442 9.75735 13.8035 9.97896 13.7747 10.1981C13.7674 10.2533 13.7454 10.3308 13.6746 10.4752C13.6019 10.6237 13.4956 10.8084 13.3368 11.0833C13.1781 11.3583 13.0713 11.5426 12.9791 11.6799C12.8894 11.8134 12.8333 11.8712 12.7891 11.9051C12.6138 12.0397 12.3922 12.0991 12.173 12.0702C12.1039 12.0611 12.0059 12.0301 11.7953 11.9188C11.3279 11.6717 10.7511 11.6536 10.267 11.9331C9.78306 12.2125 9.51043 12.7211 9.49068 13.2493C9.48178 13.4874 9.45966 13.5879 9.43298 13.6523C9.3484 13.8565 9.18617 14.0187 8.98198 14.1033C8.93055 14.1246 8.8524 14.1442 8.69192 14.1552C8.52694 14.1664 8.31388 14.1667 7.99641 14.1667C7.67895 14.1667 7.46588 14.1664 7.30091 14.1552C7.14042 14.1442 7.06228 14.1246 7.01084 14.1033C6.80665 14.0187 6.64443 13.8565 6.55985 13.6523C6.53317 13.5879 6.51105 13.4875 6.50215 13.2494C6.48239 12.7211 6.20973 12.2125 5.72569 11.9331C5.24164 11.6536 4.66483 11.6718 4.19747 11.9188C3.98685 12.0301 3.88884 12.0612 3.81972 12.0703C3.60059 12.0991 3.37899 12.0397 3.20364 11.9052C3.15947 11.8713 3.10338 11.8134 3.01366 11.6799C2.92142 11.5427 2.81466 11.3583 2.65592 11.0834C2.49719 10.8084 2.39089 10.6238 2.31815 10.4753C2.24739 10.3308 2.22534 10.2533 2.21807 10.1981C2.18923 9.97901 2.24861 9.7574 2.38315 9.58206C2.42559 9.52674 2.50149 9.45739 2.70322 9.33064C3.15081 9.04941 3.45496 8.55899 3.45499 8.00008C3.45502 7.44111 3.15085 6.95062 2.70323 6.66936C2.50154 6.54264 2.42565 6.47328 2.38322 6.41798C2.24867 6.24264 2.18929 6.02103 2.21814 5.80191C2.22541 5.74671 2.24746 5.66921 2.31822 5.52475C2.39096 5.37625 2.49725 5.1916 2.65599 4.91666C2.81472 4.64173 2.92149 4.45735 3.01372 4.3201C3.10345 4.18659 3.15954 4.12874 3.20371 4.09485C3.37905 3.96031 3.60066 3.90093 3.81978 3.92977C3.88891 3.93887 3.98693 3.96993 4.19757 4.08127C4.66491 4.32827 5.24169 4.34645 5.72571 4.06701C6.20974 3.78756 6.48239 3.27895 6.50215 2.75072C6.51105 2.51263 6.53317 2.41222 6.55985 2.34781C6.64443 2.14362 6.80665 1.98139 7.01084 1.89681Z" fill="#434343" />
                    </svg>

                    Printing Settings
                </Link>
                <Link
                    to={HOME_PATH}
                    className={settingsLink}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33337 0.833313C3.60952 0.833313 3.83337 1.05717 3.83337 1.33331V2.05674L4.88243 1.84693C6.07789 1.60784 7.31708 1.72161 8.44902 2.17439L8.58478 2.22869C9.52797 2.60597 10.5661 2.67642 11.5516 2.43004C12.372 2.22494 13.1667 2.84544 13.1667 3.6911V8.60245C13.1667 9.26142 12.7182 9.83582 12.0789 9.99564L11.936 10.0314C10.6543 10.3518 9.30425 10.2602 8.07763 9.76953C7.12581 9.3888 6.08379 9.29313 5.07855 9.49418L3.83337 9.74322V14.6666C3.83337 14.9428 3.60952 15.1666 3.33337 15.1666C3.05723 15.1666 2.83337 14.9428 2.83337 14.6666V1.33331C2.83337 1.05717 3.05723 0.833313 3.33337 0.833313ZM3.83337 8.72341L4.88243 8.5136C6.07789 8.27451 7.31708 8.38828 8.44902 8.84106C9.48046 9.25363 10.6157 9.33068 11.6934 9.06125L11.8364 9.0255C12.0305 8.97697 12.1667 8.80255 12.1667 8.60245V3.6911C12.1667 3.49602 11.9834 3.35287 11.7941 3.40019C10.6047 3.69755 9.35175 3.61251 8.21339 3.15717L8.07763 3.10287C7.1258 2.72214 6.08379 2.62647 5.07855 2.82751L3.83337 3.07655V8.72341Z" fill="#434343" />
                    </svg>

                    Report a bug
                </Link>
            </div>

            <div className={settingsLogOut}>
                <Link
                    to={HOME_PATH}
                >
                    Log out
                </Link>
            </div>
        </div >
    )
}

export default SettingsComponent;