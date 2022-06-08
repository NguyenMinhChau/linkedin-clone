import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { articleContents } from '../../../../../reducers';
import styles from '../ContentMiddle.module.css';

function BottomButtonHashtagAndMention({ refTextArea }) {
    const dispatch = useDispatch();
    return (
        <>
            <button
                className={`${clsx(styles.share_modal_bottom_add_hastag)} mr-2`}
                onClick={() =>
                    dispatch(
                        articleContents.handleAddHashtag(refTextArea.current)
                    )
                }
            >
                Add hashtag
            </button>
            <button
                className={`${clsx(styles.share_modal_bottom_add_hastag)}`}
                onClick={() =>
                    dispatch(
                        articleContents.handleAddMentions(refTextArea.current)
                    )
                }
            >
                Add mentions
            </button>
        </>
    );
}

export default BottomButtonHashtagAndMention;
