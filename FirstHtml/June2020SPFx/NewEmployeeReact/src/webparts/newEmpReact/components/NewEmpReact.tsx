import * as React from 'react';
import { INewEmpReactProps } from './INewEmpReactProps';
import MTMCard, { MTMJumbotron } from './MTMCard';


export default class NewEmpReact extends React.Component<INewEmpReactProps, {}> {
  public render(): React.ReactElement<INewEmpReactProps> {
    const cards = [
      {
        title: 'Abay Gedebu',
        img: "alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
        description: 'Some description about Abay'
      },
      {
        title: 'Tesfaye Gari',
        img: "alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
        description: 'Some info about Tesfaye'
      },
      {
        title: 'Yodah Hunde',
        img: "alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
        description: 'Some description about Yodi'
      },
    ];
    return (
      <div>
        <MTMJumbotron
          title={this.props.title}
          description={this.props.description}
        />
        <div className="row">

          {cards.map(item =>
            <div className="col-md-4">
              <MTMCard {...item} />
            </div>)
          }
        </div>
        <MTMJumbotron
          title="Title of Jombotron 2"
          description="Some description is good"
        />
      </div>
    );
  }
}
