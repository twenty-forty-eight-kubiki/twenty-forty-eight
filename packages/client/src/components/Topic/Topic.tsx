import React from 'react'
import './Topic.scss'
import Icon from '../../ui/Icon/Icon';

const Topic = () => {
    const topic = {
        user_name: 'Vasia',
        date: '25.02.2023',
        id: 1,
        title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur purus magna, et mattis mauris aliquam quis. Ut quis efficitur purus. Etiam consectetur urna orci. Mauris molestie orci libero, at laoreet nulla molestie dignissim. Donec eros nisi, eleifend maximus massa nec, elementum fermentum libero. Ut a sollicitudin nisi, luctus interdum libero. Aenean bibendum luctus ultricies. Morbi leo ante, iaculis ut pretium nec, finibus luctus neque. Curabitur sit amet eros massa. Sed a dolor at velit condimentum congue.\n' +
            'Sed in porta ligula, vitae vulputate purus. Donec facilisis imperdiet ante, eget lobortis ligula bibendum quis. Proin luctus risus quis quam ultrices, sollicitudin aliquam enim porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin bibendum ultrices urna. Praesent eu finibus mi. Mauris eget semper diam, quis sodales lacus. Etiam risus nunc, lobortis sed sodales et, condimentum in turpis. Phasellus suscipit malesuada dignissim. Suspendisse molestie dolor a ultricies iaculis. Mauris id leo nec odio volutpat convallis eu at purus. Integer consectetur ornare scelerisque. Mauris faucibus ipsum libero. Etiam vel odio euismod, blandit sem sagittis, ultricies felis. Pellentesque nec neque egestas ante condimentum tempor. Sed rutrum volutpat velit vel imperdiet.\n' +
            'Fusce libero magna, euismod at pellentesque sit amet, molestie quis nibh. Ut purus orci, malesuada ut ornare et, ornare lacinia tortor. Ut eget suscipit elit. Curabitur ultricies sem in diam cursus, in vehicula metus eleifend. Integer euismod, sapien vitae eleifend sodales, sapien risus convallis risus, at mattis tortor urna et leo. Vestibulum consequat lacinia nisi, eget vestibulum libero molestie nec. Praesent velit tellus, porta non elementum pretium, varius quis augue. Donec pellentesque a orci blandit aliquam. Nulla vel ligula dolor. Aliquam nec gravida dui.\n' +
            'In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla eget nisl in neque suscipit scelerisque. Mauris leo odio, euismod viverra nunc quis, pharetra laoreet odio. Fusce iaculis, lectus a aliquet maximus, neque sapien scelerisque metus, porta mollis tortor neque a neque. Duis vel tortor interdum, accumsan nibh sit amet, blandit lacus. Etiam non lectus lorem. Vivamus gravida nisi sed laoreet posuere. Curabitur et erat id risus consectetur egestas. Fusce tincidunt sem augue, quis venenatis tortor ultricies et.\n' +
            'Pellentesque rutrum pretium commodo. Maecenas posuere nunc sit amet arcu ultrices scelerisque. Mauris ac enim eget velit pulvinar laoreet. Quisque bibendum eget neque id iaculis. Maecenas sed tellus enim. Duis tristique ipsum et egestas sodales. Morbi sit amet mi pharetra, interdum quam non, finibus ipsum. Nam pulvinar leo tellus, id ullamcorper nulla bibendum ut. Aenean et suscipit urna. Etiam tellus lorem, facilisis at quam non, tristique consequat nulla. Proin quis sapien ligula. Sed efficitur pulvinar orci, in convallis ligula semper id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin ornare tempus magna et suscipit.',
    }

    return (
        <div className="Topic">
            <div className="Topic__header">
                <Icon img=""/>
                <div className="Topic__info">
                    <div>
                        <span className="user-name">{topic.user_name}</span>, &nbsp;
                        <span className="Topic__date">{topic.date}</span>
                    </div>
                    <p className="Topic__theme">{topic.title}</p>
                </div>
            </div>
            <div className="Topic__body">{topic.body}</div>
        </div>
    )
}

export default Topic
