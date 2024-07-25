import React, { Fragment } from "react";
import Image from "next/image";

// Styles
import styles from "../blog-detail.module.css";

// Assets
import blogDetail from "../../../../public/images/blog-detail-img.png";
import blogDetail2 from "../../../../public/images/securitynet.ai.png";
import BlogDetailCategory from "./BlogDetailCategory";
import PopularPosts from "./PopularPosts";

const BlogDetail = () => {
  return (
    <Fragment>
      <div className={styles.blogDetail}>
        <div className="container">
          <div className={styles.blogMeta}>
            <div className={styles.blogContent}>
              <div className={styles.blogDetailImgContent}>
                <Image
                  src={blogDetail}
                  className={styles.blogDetailImg}
                  width={695}
                  height={462}
                  alt=""
                />
                <div className={styles.blogHeadings}>
                  <span className={styles.blogTags}>Leadership</span>
                  <h4 className={styles.blogTitle}>
                    Mastering ChatGPT Blog Creation: Dos and Don&apos;ts for
                    SaaS Marketing Managers
                  </h4>
                  <p className={styles.blogDate}>waqar hanif - jan 1, 2024</p>
                </div>
              </div>
              <div className={styles.blogDetailContent}>
                <p className={styles.para}>
                  Hello there! As a marketing manager in the SaaS industry, you
                  might be looking for innovative ways to engage your audience.
                  I bet generative AI has crossed your mind as an option for
                  creating content. Well, let me share from my firsthand
                  experience.
                </p>
                <p className={styles.para}>
                  Before you click away, disappointed that I brought up
                  something as practical and boring as time management, hear me
                  out. My intent is not to crush your spirits.
                </p>
                <p className={styles.para}>
                  Hello there! As a marketing manager in the SaaS industry, you
                  might be looking for innovative ways to engage your audience.
                  I bet generative AI has crossed your mind as an option for
                  creating content. Well, let me share from my firsthand
                  experience.
                </p>
                <h5 className={styles.detailHeading}>
                  Steering Clear of Common AI Writing Pitfalls
                </h5>
                <p className={styles.para}>
                  Remember, our goal here isn’t merely satisfying search engines
                  but, more importantly, knowledge-hungry humans seeking
                  reliable information online. So keep your audience&apos;s
                  needs at heart while leveraging technology’s assistance!
                </p>
                <Image src={blogDetail2} width={850} height={550} alt="" />
                <p className={styles.para}>
                  To its detractors, love at first sight must be an illusion –
                  the wrong term for what is simply infatuation, or a way to
                  sugarcoat lust.
                </p>
                <ul className={styles.detailList}>
                  <li>Joe Doe tested negative for Tech Literacy.</li>
                  <li>
                    Shane’s diagnosis could spell disaster for his campaign.
                  </li>
                  <li>
                    The Shane team is on guard against foreign adversaries who
                    could exploit the lack of tech literacy.
                  </li>
                </ul>
                <h5 className={styles.detailHeading}>
                  There is always the New Project, the New Opportunity
                </h5>
                <p className={styles.para}>
                  Even though Google and Facebook opened Australian offices
                  relatively early (Google in 2003 and Facebook in 2009), they
                  are unashamedly US companies, obsessed with US politics. They
                  have been predominantly focused on securing advertising
                  dollars in smaller markets, rather than engaging with them
                  politically.
                </p>
              </div>
            </div>
            <div className={styles.blogSidebar}>
              <BlogDetailCategory />
              <PopularPosts />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogDetail;
