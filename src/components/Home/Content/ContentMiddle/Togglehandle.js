/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { db } from '../../../../firebase';
import styles from './ContentMiddle.module.css';

export function useMentionsAndHashtag() {
    const actionsCharactor = useHandleCustomeCharacter();
    // PHỤC VỤ MENTIONS VÀ HASHTAG
    const [userMention, setUserMention] = useState([]);
    useEffect(() => {
        db.collection('users').onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                setUserMention(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const datas = userMention.map((item) => {
        return {
            id: actionsCharactor.removeAccentsAddHephyn(item.displayName),
            display: item.displayName,
            photoURL: item.photoURL,
        };
    });
    const users = [...datas];
    const renderUserSuggestion = (user, index) => {
        return (
            <div className={styles.userSuggestion} key={index}>
                <img
                    onError={(e) => {
                        e.target.src = '/icons8-linkedin.svg';
                    }}
                    src={user.photoURL}
                    alt='avatar'
                    className={`${clsx(styles.render_user_suggestion)}`}
                />
                <span>{user.display}</span>
            </div>
        );
    };
    const renderUserSuggestionTag = (user, index) => {
        return (
            <div className={styles.userSuggestion} key={index}>
                <span>{user.display}</span>
            </div>
        );
    };
    const displayTransform = (id, display) => {
        return `@${display}`;
    };
    const displayTransformTag = (id, display) => {
        return `#${display}`;
    };
    // END
    return {
        users,
        renderUserSuggestion,
        renderUserSuggestionTag,
        displayTransform,
        displayTransformTag,
    };
}

export function useHandleCustomeCharacter() {
    var AccentsMap = [
        'aàảãáạăằẳẵắặâầẩẫấậ',
        'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
        'dđ',
        'DĐ',
        'eèẻẽéẹêềểễếệ',
        'EÈẺẼÉẸÊỀỂỄẾỆ',
        'iìỉĩíị',
        'IÌỈĨÍỊ',
        'oòỏõóọôồổỗốộơờởỡớợ',
        'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
        'uùủũúụưừửữứự',
        'UÙỦŨÚỤƯỪỬỮỨỰ',
        'yỳỷỹýỵ',
        'YỲỶỸÝỴ',
    ];
    function removeAccentsAddHephyn(str) {
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            if (str) {
                str = str.replace(re, char);
                str = str.replace(' ', '-');
                str = str.toLowerCase();
            }
        }
        return str;
    }
    function removeAccents(str) {
        for (var i = 0; i < AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }
    return {
        removeAccentsAddHephyn,
        removeAccents,
    };
}
