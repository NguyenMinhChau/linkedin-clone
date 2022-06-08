import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEmbedContentHook } from './getData';
import { embeds } from './reducers';
import './App.css';
// DUNGF CHO EMBED
import styles from './components/Home/Content/ContentMiddle/ContentMiddle.module.css';
import {
    Header,
    HeaderHome,
    Main,
    Home,
    MyNetwork,
    Jobs,
    Messaging,
    Notifications,
    SettingsPrivacy,
    Help,
    Language,
    PostsActivity,
    JobsPostingAccount,
    Learning,
    Insights,
    PostJob,
    Advertise,
    FindLeads,
    Groups,
    ServiceMarketplace,
    Salary,
    Discover,
    People,
    UserAgreement,
    PrivacyPolicy,
    CookiePolicy,
    About,
    Accessibility,
    CommunityGuidelines,
    CopyrightPolicy,
    BrandPolicy,
    SendFeedback,
    UserProfile,
    PostDetail,
    EmbedModal,
    EmbedDetail,
    Footer,
    NotFound,
    GuestControls,
    Signin,
    JoinNow,
} from './components';

function App() {
    const dispatch = useDispatch();
    const actionsEmbed = useEmbedContentHook();
    const idPost = useSelector((state) => state.embedContent.idPost);
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={[<Header />, <Main />]} />
                <Route path='/home' element={<Home />} />
                <Route
                    path='/my-network'
                    element={[<HeaderHome />, <MyNetwork />, <Footer />]}
                />
                <Route
                    path='/jobs'
                    element={[<HeaderHome />, <Jobs />, <Footer />]}
                />
                <Route
                    path='/messaging'
                    element={[<HeaderHome />, <Messaging />, <Footer />]}
                />
                <Route
                    path='/notifications'
                    element={[<HeaderHome />, <Notifications />, <Footer />]}
                />
                <Route
                    path='/settings-and-privacy'
                    element={[<HeaderHome />, <SettingsPrivacy />, <Footer />]}
                />
                <Route
                    path='/help'
                    element={[<HeaderHome />, <Help />, <Footer />]}
                />
                <Route
                    path='/language'
                    element={[<HeaderHome />, <Language />, <Footer />]}
                />
                <Route
                    path='/posts-and-activity'
                    element={[<HeaderHome />, <PostsActivity />, <Footer />]}
                />
                <Route
                    path='/job-posting-account'
                    element={[
                        <HeaderHome />,
                        <JobsPostingAccount />,
                        <Footer />,
                    ]}
                />
                <Route
                    path='/learning'
                    element={[<HeaderHome />, <Learning />, <Footer />]}
                />
                <Route
                    path='/insights'
                    element={[<HeaderHome />, <Insights />, <Footer />]}
                />
                <Route
                    path='/post-a-job'
                    element={[<HeaderHome />, <PostJob />, <Footer />]}
                />
                <Route
                    path='/advertise'
                    element={[<HeaderHome />, <Advertise />, <Footer />]}
                />
                <Route
                    path='/find-leads'
                    element={[<HeaderHome />, <FindLeads />, <Footer />]}
                />
                <Route
                    path='/groups'
                    element={[<HeaderHome />, <Groups />, <Footer />]}
                />
                <Route
                    path='/services-marketplace'
                    element={[
                        <HeaderHome />,
                        <ServiceMarketplace />,
                        <Footer />,
                    ]}
                />
                <Route
                    path='/salary'
                    element={[<HeaderHome />, <Salary />, <Footer />]}
                />
                <Route
                    path='/discover'
                    element={[<HeaderHome />, <Discover />, <Footer />]}
                />
                <Route
                    path='/people'
                    element={[<HeaderHome />, <People />, <Footer />]}
                />
                <Route
                    path='/user-agreement'
                    element={[<HeaderHome />, <UserAgreement />, <Footer />]}
                />
                <Route
                    path='/privacy-policy'
                    element={[<HeaderHome />, <PrivacyPolicy />, <Footer />]}
                />
                <Route
                    path='/cookie-policy'
                    element={[<HeaderHome />, <CookiePolicy />, <Footer />]}
                />
                <Route
                    path='/about'
                    element={[<HeaderHome />, <About />, <Footer />]}
                />
                <Route
                    path='/accessibility'
                    element={[<HeaderHome />, <Accessibility />, <Footer />]}
                />
                <Route
                    path='/community-guidelines'
                    element={[
                        <HeaderHome />,
                        <CommunityGuidelines />,
                        <Footer />,
                    ]}
                />
                <Route
                    path='/copyright-policy'
                    element={[<HeaderHome />, <CopyrightPolicy />, <Footer />]}
                />
                <Route
                    path='/brand-policy'
                    element={[<HeaderHome />, <BrandPolicy />, <Footer />]}
                />
                <Route
                    path='/guest-controls'
                    element={[<HeaderHome />, <GuestControls />, <Footer />]}
                />
                <Route
                    path='/send-feedback'
                    element={[<HeaderHome />, <SendFeedback />, <Footer />]}
                />
                <Route
                    path='/:name/:id'
                    element={[<HeaderHome />, <UserProfile />, <Footer />]}
                />
                <Route
                    path='/posts/detail/:id'
                    element={[<HeaderHome />, <PostDetail />, <Footer />]}
                />
                <Route
                    path='/embed/feed/update/:id'
                    element={<EmbedDetail />}
                />
                <Route path='/signin' element={<Signin />} />
                <Route path='/join-now' element={<JoinNow />} />
                <Route
                    path='*'
                    element={[<Header />, <NotFound />, <Footer />]}
                />
            </Routes>
            {actionsEmbed.toggleEmbed && (
                <EmbedModal
                    idPost={idPost}
                    handleContainersEmbedClick={(e) => {
                        e.stopPropagation();
                        dispatch(embeds.handleContainersEmbedClick());
                    }}
                    handleContentEmbedClick={(e) => {
                        e.stopPropagation();
                        dispatch(embeds.handleContentsEmbedClick());
                    }}
                />
            )}
        </div>
    );
}

export default App;
