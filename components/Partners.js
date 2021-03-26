import ExpandCollapse from 'react-expand-collapse';

export const PartnerInfo = ({ t }) => {
  const options = {
    previewHeight: '6em', // 1 line = 3em => 2 lines
    expandText: 'more',
    collapseText: 'less',
  };

  return (
    <div className="row center-xs pt-large pb">
      <div className="col-xs-11 start-xs exchanges bb">
        <div className="start-sm pb-small">
          <h2>
            {t('home:partnership.intro', {
              defaultValue: 'On our mission for mass adoption,',
            })}{' '}
            {t('home:partnership.subintro', {
              defaultValue: 'we are supported by the following partners:',
            })}
          </h2>
        </div>
        <div className="partners-grid">
          <div>
            <a href="https://www.mindgeek.com/">
              <img src="/static/img/partners/mindgeek.png" alt="mindgeek" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.mindgeek', {
                defaultValue: `MindGeek is a global industry-leading information technology firm
                headquartered in Luxembourg, with offices in Nicosia, London,
                Miami, Montreal and Los Angeles. MindGeek continues to drive the
                state of technology forward, developing industry-leading solutions
                enabling faster, more efficient delivery of content every second
                to millions of customers worldwide.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.voice-life.com/">
              <img src="/static/img/partners/voicelife.png" alt="voicelife" className="img--smaller"/>
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.voicelife', {
                defaultValue: `
                Voice Life and Verge Currency are excited to announce a strategic alliance to create a new all-in-one payment system. Combining Voice Life’s (FFWCS) smart phone capabilities with VergePAY to design a blockchain based system utilizing Verge Currency (XVG) for daily use activities.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://net-cents.com/">
              <img src="/static/img/partners/netcents.png" alt="netcents" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.netcents', {
                defaultValue: `NetCents is a next-generation online payment processing platform,
                  offering consumers and merchants online services for managing
                  electronic payments. The Company is focused on capturing the
                  migration from cash to digital currency by utilizing innovative
                  Blockchain Technology to provide payment solutions that are simple
                  to use, secure and worry-free. NetCents has partnered with Verge
                  along with its financial partners, mobile operators, exchanges,
                  etc., to streamline the user experience of transacting online.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.xceltrip.com/">
              <img src="/static/img/vendors/latest/xceltrip.png" alt="xceltrip" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.xceltrip', {
                defaultValue: `
                XcelTrip is a full-service online Travel platform providing travel services, including airline tickets, accommodation, vehicle rentals, 
                restaurants, etc. powered by blockchain technology. 
                Use $XVG to book over 800,000 #hotels, 300+ #airlines, and/or top up your cellphone across 900 operators across 160 nations. 
                Grab it now on the Apple Store or Google Play.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://pacquiaofoundation.org/">
              <img src="/static/img/vendors/latest/pacfoundation.png" alt="pacfoundation" className="img--wider" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.pacfoundation', {
                defaultValue: `
                Named and founded on behalf of future Hall of Fame Boxer Manny Pacquiao, The Manny Pacquiao Foundation 
                seeks to empower communities and individuals through charitable support and a message of hope and change.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://mobiepay.io/">
              <img src="/static/img/vendors/latest/mobiepay.png" alt="mobiepay" className="img--smaller"/>
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.mobiepay', {
                defaultValue: `
                The MobiePay universal payments & rewards ecosystem lets consumers spend or send cash and digital currency worldwide from their 
                mobile phone in seconds. Their integrated rewards platform supports cashback & rewards on purchases and referrals to promote 
                commerce & adoption. Their focus is on mobile payments and payment gateways to provide an easy and secure way to serve the global 
                retail marketplace.`,
              })}
            </ExpandCollapse>
          </div>
          <div></div>
          <div>
            <a href="http://www.meconcash.com/index_en.html">
              <img src="/static/img/vendors/latest/meconcash.png" alt="meconcash" className="img--smaller"/>
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.meconcash', {
                defaultValue: `
                Using the MeconCash platform, M.Pay, Verge holders will be able to instantly withdraw Korean Wons through a whopping 13 000 ATMs in 
                South Korea. This will allow travelers, students and anyone who holds Verge the ability to quickly withdraw their money, 24/7.`,
              })}
            </ExpandCollapse>
          </div>
        </div>
      </div>
    </div>
  );
};
