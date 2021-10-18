import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'react-native-elements';
import styles from './styles';
import { fab } from '@fortawesome/free-brands-svg-icons';

const Post = ({post}) => {
    post.comments.splice(0, Math.floor(Math.random() * post.comments.length));

    const [liked, setLiked] = useState(false);

    const clickLikeButton = () => {
        if(liked) {
            setLiked(false);
            post.likes -= 1;
        } else {
            setLiked(true);
            post.likes += 1;
        }
    }
    return (
        <View style={{ marginBottom: 25 }}>
            <Divider width={1} orientation='vertical'/>
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <PostFooter clickLikeButton={clickLikeButton} liked={liked}/>
            <Likes post={post} />
            <Caption post={post} />
            <CommentsSection post={post} />
            {post.comments.map((comment, idx) => (
                <Comment comment={comment} key={idx} />
                )
            )}
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={{
        flexDirection: "row", 
        justifyContent: "space-between",
        margin: 10,
        alignItems: "center"
        }}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
            <Image 
                source={{uri : post.imageUrl}}
                style={styles.storyImage}
            />
            <Text style={styles.userTitle}>{
                            post.user.length > 6 ? post.user.slice(0, 6) : post.user
                        }
            </Text>
        </View>
        <Text style={{fontWeight: "bold", color: "#fff"}}>...</Text>
    </View>
);

const PostImage = ({post}) => (
    <View style={{width: "100%", height: 450}}>
        <Image 
            source={{uri: post.profilePicture}}
            style={{height: "100%", resizeMode: "cover"}}
        />
    </View>
);

const PostFooter = ({post, liked, clickLikeButton}) => (
    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 8, marginBottom: 8, marginLeft: -12}}>
         <View style={{flexDirection: "row"}}>
            <TouchableOpacity onPress={clickLikeButton}>
                <FontAwesomeIcon style={styles.headerIcon} icon={ faHeart } color={liked ? 'red' : '#fff'} size={24}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesomeIcon style={styles.headerIcon} icon={ faComment } size={24}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesomeIcon style={styles.headerIcon} icon={ faPaperPlane } size={24}/>
            </TouchableOpacity>
         </View>
         <View style={{marginRight: 15}}>
            <TouchableOpacity>
                <FontAwesomeIcon style={styles.headerIcon} icon={ faBookmark } size={24}/>
            </TouchableOpacity>
         </View>
    </View>
);

const Likes = ({post}) => (
    <View>
        <Text style={{color: "#fff"}}>{post.likes} likes</Text>
    </View>
);

const Caption = ({post}) => (
    <View style={{ color: "#fff" }}>
        <Text style={{ color: "#fff" }}>
            <Text style={{ fontWeight: "bold"}}>{post.user} </Text>
            <Text style={{ fontWeight: "300"}}>{post.caption}</Text>
        </Text>
    </View>
);

const CommentsSection = ({post}) => {
    return (
            <>
            {!!post.comments.length &&
            <Text style={{ color: "gray" }}>
                View 
                {post.comments.length > 1 ? ' all ' : ' '} 
                {post.comments.length} 
                {post.comments.length > 1 ? ' comments' : ' comment'} 
            </Text>
            }
            </>
    )
};

const Comment = ({comment}) => {
    const [more, setMore] = useState(false);

    const showMore = () => {
        if(more) {
            setMore(false);
        } else {
            setMore(true);
        }
    }
    return (
    <>
        <Text style={{ color: "#fff", marginBottom: 5}}>
            <Text style={{ fontWeight: "bold"}}>{comment.user} </Text>
            <Text>{
                comment.comment.length > 116 ? comment.comment.slice(0, 116): comment.comment
            }</Text>
            {more ? <>{comment.comment.slice(116, -1)}</> :
             <>
            {comment.comment.length > 116 && (
                <TouchableOpacity onPress={showMore}>
                    <Text style={{color: "gray"}}>... more</Text> 
                </TouchableOpacity>
                )
            }
            </>}
        </Text>
    </>
    )
};

export default Post;