import React from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import { useDispatch } from 'react-redux';
import { useArticleContentHook } from '../../../../../getData';
import { articleContents } from '../../../../../reducers';
import { useMentionsAndHashtag } from '../Togglehandle';
import defaultStyle from '../defaultCss';

function MiddleContentArticle({ refTextArea }) {
    const dispatch = useDispatch();
    const actionsArticleContent = useArticleContentHook();
    const actionsMentionsAndHashtag = useMentionsAndHashtag();
    return (
        <>
            <h6
                className='text_bold mt-2'
                style={{
                    fontFamily: 'Times New Roman',
                }}
            >
                Contents article
            </h6>
            {/* MENTIONS AND HASHTAG */}
            <MentionsInput
                value={actionsArticleContent.content}
                onChange={(e) =>
                    dispatch(
                        articleContents.handleChangeContent(e.target.value)
                    )
                }
                markup='@[__display__]'
                style={defaultStyle}
                placeholder='Start writing or use @ to mention people, companies or schools'
                inputRef={refTextArea}
            >
                <Mention
                    trigger='@'
                    data={actionsMentionsAndHashtag.users}
                    renderSuggestion={(item, index) =>
                        actionsMentionsAndHashtag.renderUserSuggestion(
                            item,
                            index
                        )
                    }
                    appendSpaceOnAdd={true}
                    // Quy định kiểu hiển thị ra giao diện
                    markup='@[__display__]'
                    displayTransform={
                        actionsMentionsAndHashtag.displayTransform
                    }
                    className='mentions__mention'
                />
                <Mention
                    trigger='#'
                    data={actionsMentionsAndHashtag.users}
                    appendSpaceOnAdd={true}
                    renderSuggestion={(item, index) =>
                        actionsMentionsAndHashtag.renderUserSuggestionTag(
                            item,
                            index
                        )
                    }
                    // Quy định kiểu hiển thị ra giao diện
                    markup='#[__display__]'
                    displayTransform={
                        actionsMentionsAndHashtag.displayTransformTag
                    }
                    className='hashtags__hashtag'
                />
            </MentionsInput>
        </>
    );
}

export default MiddleContentArticle;
