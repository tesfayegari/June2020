import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from "@microsoft/sp-loader";

import * as strings from 'NewEmpReactWebPartStrings';
import NewEmpReact from './components/NewEmpReact';
import { INewEmpReactProps } from './components/INewEmpReactProps';

export interface INewEmpReactWebPartProps {
  description: string;
  title: string;
}

export default class NewEmpReactWebPart extends BaseClientSideWebPart<INewEmpReactWebPartProps> {

  public render(): void {
    SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css');
    
    const element: React.ReactElement<INewEmpReactProps> = React.createElement(
      NewEmpReact,
      {
        description: this.properties.description,
        title: this.properties.title
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
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
                }),
                PropertyPaneTextField('title', {
                  label: 'Title'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
