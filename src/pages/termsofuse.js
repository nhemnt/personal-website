import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default function termsOfUse() {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(query)
  const webUrl = new URL(siteUrl)
  return (
    <Layout>
      <div>
        <div className="container">
          <div className="wrapper">
            <div className="col-md-2" />
            <div className="col-md-8">
              <div className="content">
                <div className="joke_box">
                  <h1>Terms and conditions</h1>
                  <p>
                    These terms and conditions ("Terms", "Agreement") are an
                    agreement between Website Operator ("Website Operator",
                    "us", "we" or "our") and you ("User", "you" or "your"). This
                    Agreement sets forth the general terms and conditions of
                    your use of the{' '}
                    <a href={webUrl.href}>{webUrl.href}</a>{' '}
                    website and any of its products or services (collectively,
                    "Website" or "Services").
                  </p>
                  <h2>Backups</h2>
                  <p>
                    We are not responsible for Content residing on the Website.
                    In no event shall we be held liable for any loss of any
                    Content. It is your sole responsibility to maintain
                    appropriate backup of your Content. Notwithstanding the
                    foregoing, on some occasions and in certain circumstances,
                    with absolutely no obligation, we may be able to restore
                    some or all of your data that has been deleted as of a
                    certain date and time when we may have backed up data for
                    our own purposes. We make no guarantee that the data you
                    need will be available.
                  </p>
                  <h2>Advertisements</h2>
                  <p>
                    During use of the Website, you may enter into correspondence
                    with or participate in promotions of advertisers or sponsors
                    showing their goods or services through the Website. Any
                    such activity, and any terms, conditions, warranties or
                    representations associated with such activity, is solely
                    between you and the applicable third-party. We shall have no
                    liability, obligation or responsibility for any such
                    correspondence, purchase or promotion between you and any
                    such third-party.
                  </p>
                  <h2>Prohibited uses</h2>
                  <p>
                    In addition to other terms as set forth in the Agreement,
                    you are prohibited from using the Website or its Content:
                    (a) for any unlawful purpose; (b) to solicit others to
                    perform or participate in any unlawful acts; (c) to violate
                    any international, federal, provincial or state regulations,
                    rules, laws, or local ordinances; (d) to infringe upon or
                    violate our intellectual property rights or the intellectual
                    property rights of others; (e) to harass, abuse, insult,
                    harm, defame, slander, disparage, intimidate, or
                    discriminate based on gender, sexual orientation, religion,
                    ethnicity, race, age, national origin, or disability; (f) to
                    submit false or misleading information; (g) to upload or
                    transmit viruses or any other type of malicious code that
                    will or may be used in any way that will affect the
                    functionality or operation of the Service or of any related
                    website, other websites, or the Internet; (h) to collect or
                    track the personal information of others; (i) to spam,
                    phish, pharm, pretext, spider, crawl, or scrape; (j) for any
                    obscene or immoral purpose; or (k) to interfere with or
                    circumvent the security features of the Service or any
                    related website, other websites, or the Internet. We reserve
                    the right to terminate your use of the Service or any
                    related website for violating any of the prohibited uses.
                  </p>
                  <h2>Intellectual property rights</h2>
                  <p>
                    This Agreement does not transfer from Website Operator to
                    you any Website Operator or third-party intellectual
                    property, and all right, title, and interest in and to such
                    property will remain (as between the parties) solely with
                    Website Operator. All trademarks, service marks, graphics
                    and logos used in connection with our Website or Services,
                    are trademarks or registered trademarks of Website Operator
                    or Website Operator licensors. Other trademarks, service
                    marks, graphics and logos used in connection with our
                    Website or Services may be the trademarks of other third
                    parties. Your use of our Website and Services grants you no
                    right or license to reproduce or otherwise use any Website
                    Operator or third-party trademarks.
                  </p>
                  <h2>Limitation of liability</h2>
                  <p>
                    To the fullest extent permitted by applicable law, in no
                    event will Website Operator, its affiliates, officers,
                    directors, employees, agents, suppliers or licensors be
                    liable to any person for (a): any indirect, incidental,
                    special, punitive, cover or consequential damages
                    (including, without limitation, damages for lost profits,
                    revenue, sales, goodwill, use or content, impact on
                    business, business interruption, loss of anticipated
                    savings, loss of business opportunity) however caused, under
                    any theory of liability, including, without limitation,
                    contract, tort, warranty, breach of statutory duty,
                    negligence or otherwise, even if Website Operator has been
                    advised as to the possibility of such damages or could have
                    foreseen such damages. To the maximum extent permitted by
                    applicable law, the aggregate liability of Website Operator
                    and its affiliates, officers, employees, agents, suppliers
                    and licensors, relating to the services will be limited to
                    an amount greater of one dollar or any amounts actually paid
                    in cash by you to Website Operator for the prior one month
                    period prior to the first event or occurrence giving rise to
                    such liability. The limitations and exclusions also apply if
                    this remedy does not fully compensate you for any losses or
                    fails of its essential purpose.
                  </p>
                  <h2>Indemnification</h2>
                  <p>
                    You agree to indemnify and hold Website Operator and its
                    affiliates, directors, officers, employees, and agents
                    harmless from and against any liabilities, losses, damages
                    or costs, including reasonable attorneys' fees, incurred in
                    connection with or arising from any third-party allegations,
                    claims, actions, disputes, or demands asserted against any
                    of them as a result of or relating to your Content, your use
                    of the Website or Services or any willful misconduct on your
                    part.
                  </p>
                  <h2>Severability</h2>
                  <p>
                    All rights and restrictions contained in this Agreement may
                    be exercised and shall be applicable and binding only to the
                    extent that they do not violate any applicable laws and are
                    intended to be limited to the extent necessary so that they
                    will not render this Agreement illegal, invalid or
                    unenforceable. If any provision or portion of any provision
                    of this Agreement shall be held to be illegal, invalid or
                    unenforceable by a court of competent jurisdiction, it is
                    the intention of the parties that the remaining provisions
                    or portions thereof shall constitute their agreement with
                    respect to the subject matter hereof, and all such remaining
                    provisions or portions thereof shall remain in full force
                    and effect.
                  </p>
                  <h2>Dispute resolution</h2>
                  <p>
                    The formation, interpretation and performance of this
                    Agreement and any disputes arising out of it shall be
                    governed by the substantive and procedural laws of
                    Marrakech-Tensift-Al Haouz, Morocco without regard to its
                    rules on conflicts or choice of law and, to the extent
                    applicable, the laws of Morocco. The exclusive jurisdiction
                    and venue for actions related to the subject matter hereof
                    shall be the state and federal courts located in
                    Marrakech-Tensift-Al Haouz, Morocco, and you hereby submit
                    to the personal jurisdiction of such courts. You hereby
                    waive any right to a jury trial in any proceeding arising
                    out of or related to this Agreement. The United Nations
                    Convention on Contracts for the International Sale of Goods
                    does not apply to this Agreement.
                  </p>
                  <h2>Changes and amendments</h2>
                  <p>
                    We reserve the right to modify this Agreement or its
                    policies relating to the Website or Services at any time,
                    effective upon posting of an updated version of this
                    Agreement on the Website. When we do we will revise the
                    updated date at the bottom of this page. Continued use of
                    the Website after any such changes shall constitute your
                    consent to such changes.
                  </p>
                  <h2>Acceptance of these terms</h2>
                  <p>
                    You acknowledge that you have read this Agreement and agree
                    to all its terms and conditions. By using the Website or its
                    Services you agree to be bound by this Agreement. If you do
                    not agree to abide by the terms of this Agreement, you are
                    not authorized to use or access the Website and its
                    Services.
                  </p>
                  <h2>Contacting us</h2>
                  <p>
                    If you have any questions about this Agreement, please
                    contact us.
                  </p>
                  <p>This document was last updated on May 5, 2020</p>
                </div>
                <br />
                <br />
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>{' '}
        <footer className="footer">
          <br />
          <center>
            {' '}
            <p>
              <i>COPYRIGHT ©2020 {webUrl.host} . ALL RIGHTS RESERVED.</i>
            </p>
          </center>
        </footer>
      </div>
    </Layout>
  )
}
