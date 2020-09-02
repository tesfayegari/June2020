import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from "@microsoft/sp-loader";
import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';

require('./custom.css');

import * as strings from 'NewEmployeesWebPartStrings';

export interface INewEmployeesWebPartProps {
  description: string;
}

export default class NewEmployeesWebPart extends BaseClientSideWebPart<INewEmployeesWebPartProps> {

  public render(): void {
    SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css');
    SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');


    this.getItems('IT')
      .then(response => {
        console.log(' Data is ', response);
        let items = response.value;
        let myHtml = '';
        for (let emp of items) {
          myHtml += this.getEmployeeHtml(emp);
        }


        this.domElement.innerHTML = `
          <h2>${this.properties.description}</h2>
          <div class="container newEmployee p-2">
            
            <div class="row">          
              ${myHtml}
            </div>
          </div>
            `;

      }, error => console.error('Oops error', error));

  }

  private getItems(department) {
    let url = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('MTMEmployees')/items?$filter=Department eq '${department}'&$top=4`;
    return this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      });
  }

  private getEmployeeHtml(emp) {
    return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="our-team">
            <div class="picture">
              <img class="img-fluid" src="https://tgarillc.sharepoint.com/sites/playground/Galleries/${emp.PictureFileName}">
            </div>
            <div class="team-content">
              <h3 class="name">${emp.Title}</h3>
              <h4 class="title">${emp.Department}</h4>
            </div>
            <ul class="social">
              <li><a href="#" class="fa fa-facebook" aria-hidden="true"></a></li>
              <li><a href="#" class="fa fa-twitter" aria-hidden="true"></a></li>
              <li><a href="#" class="fa fa-google-plus" aria-hidden="true"></a></li>
              <li><a href="#" class="fa fa-linkedin" aria-hidden="true"></a></li>
            </ul>
          </div>
        </div>
        `;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
