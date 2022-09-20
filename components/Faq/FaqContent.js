import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

class FaqContent extends Component {
  render() {
    return (
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="section-title">
          
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
               How does the data subscription works and what's the pricing ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Customers with recurring data needs are priced monthly in arrears. There is an initial one-time set up fee. Customers are either billed a flat monthly fee or based on metered usage. The latter is reserved for high volume projects. Other billable fees for consulting and technical support are agreed in advance before they’re added to your invoice.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                   How much time does it takes to extract the data ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  It’s hard to put an exact timeframe on our lead time as it strictly depends on the data requirements such as number of sources and complexity. Our customers value us for quick turnaround and, on average, a typical project is completed in days not weeks.

We set a clear expectation of timeline beforehand and aim to get the initial sample ready within a couple of days.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is web scraping legal ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Scraping publicly available data is perfectly legal so long 1) it does not violate the source site’s terms of service, 2) data is not copyrighted, and 3) data does not contain Personally Identifiable Information (or PII). Fair to say, this is a contested and misunderstood topic.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                   What makes us unique in the market ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  We’re a completely end-to-end web scraping company with a strong belief that a client should not run any type of scrapers or compose code to scrape the information. We have among the most effective infrastructure as well as the client driven procedure to ascertain that the task runs efficiently. We mainly focus on working for clients 24x7x365 days without even having a break. Data Quality plays a major role once the data is scrapped. Our team performs various levels of automated and manual verifications on order to deliver quality results.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                   In which format do you provide data to clients ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Excel spread sheet, CSV, TSV (Tab Delimited), JSON, XML, SQL, and so on. If you have developed an API End-point, through which the data needs to be delivered in your platform, please discuss with support team.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  Do you provide backend and technical support ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Yes, we are always there to help you out with back-end support. Because we know you might face technical bugs while operating by yourself. Hence, we will help you through all the phases without you getting stuck with your core activities of business.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}

export default FaqContent;
