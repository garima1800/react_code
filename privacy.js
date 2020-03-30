import React, { Component } from "react";
import { render } from "react-dom";
import "./privacy.css";

class Policy extends Component {
  constructor() {
    super();
    this.state = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      thirteen: false
    };
  }

  onToggle = value => {
    switch (value) {
      case "ONE":
        this.setState({
            one: !this.state.one
          });
  
          break;
  
        case "TWO":
          this.setState({
            two: !this.state.two
          });
          break;
  
        case "THREE":
          this.setState({
            three: !this.state.three
          });
          break;
  
        case "FOUR":
          this.setState({
            four: !this.state.four
          });
          break;
  
        case "FIVE":
          this.setState({
            five: !this.state.five
          });
          break;
          case "SIX":
            this.setState({
              six: !this.state.six
            });
            break;
    
          case "SEVEN":
            this.setState({
              seven: !this.state.seven
            });
            break;
    
          case "EIGHT":
            this.setState({
              eight: !this.state.eight
            });
            break;
    
          case "NINE":
            this.setState({
              nine: !this.state.nine
            });
            break;
    
          case "TEN":
            this.setState({
              ten: !this.state.ten
            });
            break;
    
          case "ELEVEN":
            this.setState({
              eleven: !this.state.eleven
            });
            break;
    
          case "TWELVE":
            this.setState({
              twelve: !this.state.twelve
            });
            break;
    
          case "THIRTEEN":
            this.setState({
              thirteen: !this.state.thirteen
            });
            break;
        }
      };
      render() {
        return (
          <div>
            <div className="content-wrap nopadding">
              <div
                class="termsCondition_main_container
              checkout_steps_container clearfix"
              />
    
              <div className="termsConditionInner">
                <h1 className="user_tab_h2"> PRIVACY POLICY </h1>
              </div>
    
              <p>
                <a href="https://www.rentickle.com "> https://www.rentickle.com</a>
                is a website owned and operated by AVA Lifestyle Products and
                Services Pvt Ltd, a company duly registered and incorporated under
                the Companies Act, 2013 having its registered office at 48,
                Maheshwari Apartments, Sector - 14, Rohini, Delhi - 110085. AVA
                Lifestyle Products and Services Pvt Ltd, is strongly committed in
                protecting your privacy and has taken all necessary and reasonable
                measures to protect your personal information and handle the same in
                a safe and responsible manner in accordance with the terms and
                conditions of this policy ("Privacy Policy") set out herein below:
              </p>
    
              <p>
                {" "}
                <a href="https://www.rentickle.com">https://www.rentickle.com</a>
                ("Website") is a market place for people to engage in subscribing to
                experience(s)including but not limited to furniture, home décor,
                lifestyle products, fitness products, and any other products and/or
                services used by people either collectively as a package or
                individual items by signing a personalized contract provided
                thereunder (hereinafter referred to as Services/Products). The
                information contained in this Website and the personal information
                collected by using/ login in and/or accessing this Website are
                stored at a secured server. It is stated by the server service
                provider that they have all the best security practices required for
                the server. The security and privacy practices of the server
                operator can be known from https://godaddy.com.
                https://www.rentickle.com is not giving any warranties regarding the
                policies or practices of the server operator. <br />{" "}
              </p>
              <p>
                {" "}
                The Website is owned by an Indian company and is located in India.
                Hence, we are duty bound to abide by the laws, regulations, rules,
                circulars, notifications etc governing privacy in India. This
                Privacy Policy is applicable to all users of this Website. The user
                is herein collectively referred to as “You”. You may note that this
                Privacy Policy may be found deficient with respect to certain
                privacy laws of some other countries.
              </p>
              <p>
                {" "}
                <br /> By visiting this Website you agree to be bound by the terms
                and conditions of this Privacy Policy. If you do not agree please do
                not use or access our Website. By mere use of the Website, you
                expressly consent to our use and disclosure of your personal
                information in accordance with this Privacy Policy.{" "}
              </p>
    
              <div className="tcWrap">
                <span> Collection Of Personal information </span>
                <span className="icon_wrap" onClick={() => this.onToggle("ONE")}>
                  <em className="fa fa-angle-down" />
                </span>
              </div>
              {this.state.one ? (
                <React.Fragment>
                  <p>
                    For availing the Services/Products from the Website or to
                    contact Rentickle, you may have to sign up by giving following
                    personal information such as email address, name, phone number
                    and address. Some of these information provided above are
                    personally sensitive information (“Personal Information”) and is
                    collected for the purpose of verification of identity of the
                    user and ensure due compliances. We do use your contact
                    information to send you offers based on your previous orders and
                    your interests. In general, you can browse the Website without
                    telling us who you are or revealing any Personal Information
                    about yourself.
                  </p>
    
                  <p>
                    Additionally if you browse through this Website, our servers may
                    automatically record information of certain kind. Such
                    information includes information such as the name of the domain
                    and host from which you access the Internet; the Internet
                    Protocol (IP) address of the computer you are using; the date
                    and time of your access. We use this information to monitor the
                    usage of our Website and also whatever is necessary for our
                    business. This information does not include Personal
                    Information. If you choose to post messages on our message
                    boards, chat rooms or other message areas or leave feedback, we
                    will collect that information you provide to us. We retain this
                    information as necessary to resolve disputes, provide customer
                    support and troubleshoot problems as permitted by law. If you
                    send us personal correspondence, such as emails or letters, or
                    if other users or third parties send us correspondence about
                    your activities or postings on the Website, we may collect such
                    information into a file specific to you.
                  </p>
                </React.Fragment>
              ) : null}
 <div className="tcWrap">
            <span> Information collected from third party</span>
            <span className="icon_wrap" onClick={() => this.onToggle("TWO")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.two ? (
            <p>
              We may collect your Personal Information as well as other
              information from third parties like business partners; contractors
              etc and add the same to our account information.
            </p>
          ) : null}

          <div className="tcWrap">
            <span>Information placed on your computer</span>
            <span className="icon_wrap" onClick={() => this.onToggle("THREE")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.three ? (
            <p>
              We may store some information such as cookies on your computer.
              Cookies are pieces of information that an application transfers to
              the hard drive of a visitor's computer for record-keeping
              purposes. This information facilitates your use of Website and
              ensures that you do not need to re-enter your details every time
              you visit it. You can erase or choose to block this information
              from your computer if you want to. Erasing or blocking such
              information may limit the range of features available to the
              visitor on Website. We also use such information to provide
              visitors a personalized experience on Website. We may use such
              information to allow visitors to use Website without logging in
              upon returning.
            </p>
          ) : null}

          <div className="tcWrap">
            <span> Link</span>
            <span className="icon_wrap" onClick={() => this.onToggle("FOUR")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.four ? (
            <p>
              Our Website may contain links to other sites. Such other sites may
              use information about your visit to this Website.Our Privacy
              Policy does not apply to practices of such sites that we do not
              own or control or to people we do not employ. Therefore, we are
              not responsible for the privacy practices or the accuracy or the
              integrity of the content included on such other sites. We
              encourage you to read the individual privacy statements of such
              websites.
            </p>
          ) : null}

          <div className="tcWrap">
            <span>Use of personal information</span>
            <span className="icon_wrap" onClick={() => this.onToggle("FIVE")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.five ? (
            <React.Fragment>
              <p>
                Website collects and uses your Personal Information to provide
                you better customer experience and also in the administration of
                our business. Website may use your Personal Information to
                administer this service, personalize the Website services for
                you; enable your access to and use of Website services; publish
                information about you on Website; to keep you informed or update
                you on various products and services available from Website;
                send you statements and invoices; collect payments from you;
                send you marketing communications; to send you mails or contact
                you for various customer satisfaction surveys, market research,
                promotional activities or in connection with certain
                transactions; make communications necessary to notify you
                regarding various security, privacy, and administrative issues;
                to respond to your queries; send you information that may be of
                interest to you, share this information with Services/Products
                made available through Website; to respond to any of your
                legitimate claim, or to address you our reasonable belief, that
                you are violating the rights of any third party or any of the
                agreements or policies that govern your use of Website
                Services/Products; conduct research and perform analysis in
                order to measure, maintain, protect, develop and improve our
                services.
              </p>
              <p>
                Website has no operations in other countries and we do not
                transfer Personal Information to other countries. However, if
                the server space provider as matter of backup or other general
                practices may transfer the server content between any of the
                countries in which server provider operates or servers are
                located to enable the use of the information in accordance with
                this Privacy Policy, You agree to such cross-border transfers of
                Personal Information and the risk associated with it
              </p>
              <p>
                Where Website discloses your Personal Information to any third
                party for any purpose mentioned above, such third parties are
                obligated to use that Personal Information in accordance with
                the terms of this Privacy Policy.
              </p>
              <p>
                In addition to the disclosures reasonably necessary for the
                purposes identified above, Website may disclose your Personal
                Information to the extent that it is required to do so by law,
                in connection with any legal proceedings or prospective legal
                proceedings, and in order to establish, exercise or defend its
                legal rights.
              </p>
              <p>
                You hereby authorize us to contact you on the basis of
                information provided by you while communicating/contacting us
                through any one of the following platforms:
                <br />- Sign up and Subscription portal on the website -
                Information provided at the time of placing the order -
                Information shared during a live chat on the website - Customer
                Service Toll-Free / Marketing Number - Information shared with
                the Company Representative - Information shared with our Channel
                Partners, e.g. Property agents, other affiliates - Information
                shared on social platforms
              </p>
            </React.Fragment>
          ) : null}

          <div className="tcWrap">
            <span> Personal Information that we share</span>
            <span className="icon_wrap" onClick={() => this.onToggle("SIX")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.six ? (
            <React.Fragment>
              {" "}
              <p>
                We are committed in protecting the privacy and security of your
                information. At no time will we sell your Personal Information
                without your permission unless set forth in this Privacy Policy
                to third parties. The information we receive about you or from
                you may be used by us or shared by us with our corporate
                affiliates, dealers, agents, vendors and other third parties
              </p>
              <p>
                We do not share, sell, trade or rent your Personal Information
                to third parties for unknown reasons. We retain complete
                anonymity while in all analytics and none of the Personal
                Information is used, except in a limited set of circumstances as
                stated below. We safeguard your email addresses. We don't sell
                the email addresses provided by you and we use them only as
                directed by you and in accordance with this Policy.
              </p>
              <p>
                We share your Personal Information as described below: Business
                Transfers: If we start up subsidiaries or involve in mergers or
                acquisitions. In such case your Personal Information may be the
                matter of transfer. And we will provide notice on any such
                transfer and become subject to different privacy policy.
                Requirement under law: We release your Personal Information to
                third parties under following circumstances: - to comply with
                the law, legal process or an enforceable governmental request; -
                to enforce or apply our terms of use or other agreements with
                you; - to protect the rights or safety of Website or our users
                or others. However, transfer under this case does not include
                selling, renting, sharing, or otherwise disclosing your Personal
                Information for commercial purposes in violation of the
                commitments set forth in this Privacy Policy.
              </p>
            </React.Fragment>
          ) : null}

          <div className="tcWrap">
            <span>Our commitment to personal Information security</span>
            <span className="icon_wrap" onClick={() => this.onToggle("SEVEN")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.seven ? (
            <p>
              We recognize that your privacy is important to you, and therefore
              we endeavor to keep your Personal Information confidential. We
              will take reasonable technical and organizational precautions to
              prevent the loss, misuse or alteration of your Personal
              Information. We assure you of our best effort to protect Personal
              Information.HOWEVER,WE DO NOT REPRESENT, WARRANT, OR GUARANTEE
              THAT YOUR PERSONAL INFORMATION WILL BE PROTECTED AGAINST
              UNAUTHORIZED ACCESS, LOSS, MISUSE, OR ALTERATIONS, AND DO NOT
              ACCEPT ANY LIABILITY FOR THE SECURITY OF THE PERSONAL INFORMATION
              SUBMITTED TO US NOR FOR YOUR OR THIRD PARTIES' USE OR MISUSE OF
              PERSONAL INFORMATION.
            </p>
          ) : null}

          <div className="tcWrap">
            <span>Payment Gateway cover </span>
            <span className="icon_wrap" onClick={() => this.onToggle("EIGHT")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.eight ? (
            <React.Fragment>
              <p>
                Information relating to electronic transactions entered into via
                the Website shall be protected by encryption technology. We have
                partnered with a secure payment gate way i.e. PayU gateway. The
                Website does not have the ability to interfere and do not
                interfere with the payment gateway mechanism. The Website has no
                access to the information that you may enter for making the
                payment through the payment gateway. Your transaction and
                banking details or other information as required for internet
                banking or other payment instruments is held by our Payment
                Gateway partner (payumoney). Payumoney uses secure socket layer
                (SSL) encryption and is PCI Compliant.
              </p>
              <p>
                By creating a link to a payment gateway, we do not endorse the
                payment gateway, nor are we liable for any failure of products
                or services offered by such payment gateway. Such payment
                gateway may have a privacy policy different from that of ours.
                All failures/ errors/ omissions of the payment gateway shall be
                solely on payumoney gateway. You hereby consent that you shall
                not sue the Website for any disputes that you may have with the
                payment gateway for any wrong doing of the payment gateway.{" "}
              </p>{" "}
            </React.Fragment>
          ) : null}

          <div className="tcWrap">
            <span>Security</span>
            <span className="icon_wrap" onClick={() => this.onToggle("NINE")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.nine ? (
            <p>
              We safeguard your privacy using known security standards and
              procedures and comply with applicable privacy laws. Our Website
              combines industry -approved physical, electronic and procedural
              safeguards to ensure that your information is well protected
              through its life cycle in our infrastructure. Personal Information
              is hashed or encrypted when it is stored in our infrastructure.
              Personal Information is decrypted, processed and immediately
              re-encrypted or discarded when no longer necessary.
            </p>
          ) : null}

          <div className="tcWrap">
            <span>Opt-Out Policy</span>
            <span className="icon_wrap" onClick={() => this.onToggle("TEN")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.ten ? (
            <p>
              Please email us at{" "}
              <a href="care@rentickle.com">care@rentickle.com</a>if you no
              longer wish to receive any information from us.
            </p>
          ) : null}

          <div className="tcWrap">
            <span>Change the privacy policy cover</span>
            <span className="icon_wrap" onClick={() => this.onToggle("ELEVEN")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.eleven ? (
            <p>
              We reserve the right to modify this Privacy Policy and it is
              subject to change at any time without notice. If we decide to
              change our Privacy Policy, such changes will be posted on Website
              so that you are always aware of the latest amendments in this
              Privacy Policy and please review this Policy periodically.
            </p>
          ) : null}

          <div className="tcWrap">
            <span>About this Privacy Policy</span>
            <span className="icon_wrap" onClick={() => this.onToggle("TWELVE")}>
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.twelve ? (
            <React.Fragment>
              {" "}
              <p>
                If you choose to visit our Website, your visit and any dispute
                over privacy is subject to this Privacy Policy and Terms of Use.
                The terms of this Privacy Policy do not govern Personal
                Information furnished through any means other than the Website.
              </p>
              <p>
                If you have any questions about this Privacy Policy or Website
                treatment of your Personal Information, please write to
                care@rentickle.com.
              </p>
            </React.Fragment>
          ) : null}

          <div className="tcWrap">
            <span>Grievances</span>
            <span
              className="icon_wrap"
              onClick={() => this.onToggle("THIRTEEN")}
            >
              <em className="fa fa-angle-down" />
            </span>
          </div>

          {this.state.thirteen ? (
            <React.Fragment>
              <p>
                <a href="https://www.rentickle.com">
                  {" "}
                  https://www.rentickle.com{" "}
                </a>{" "}
                has appointed its senior executive Mr. Sandeep Kochhar, as the
                grievance officer to redress complaints relating to privacy. If
                you have any grievances against the Website privacy practices,
                or you apprehend that your privacy is compromised at the
                Website, please address your complaint/ concerns to
                care@rentickle.com. We assure, we shall pro-actively address
                your concerns.
              </p>
              <p>
                All disputes between us and you in this regard are subject to
                exclusive jurisdiction of courts in New Delhi.
              </p>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Policy      