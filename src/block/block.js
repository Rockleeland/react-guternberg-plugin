const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';
import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid #cccccc;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

  .button-container {
    text-align: center;
    padding: 22% 0;
    background: $off-white;
    border: 1px solid #cccccc;
    border-radius: 2px;
    margin: 0 0 1.2rem 0;
  }

  .heading {
    font-size: 1.5rem;
		font-weight: 600;
		text-align: center;
  }

  .image {
    height: 15.7rem;
    width: 100%;
    object-fit: cover;
  }
`;

registerBlockType( 'card-block/main', {
  title: 'Card',
  icon: 'heart',
  category: 'common',
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    }
  },
  edit({ attributes, className, setAttributes }) {

    const getImageButton = (openEvent) => {
      if(attributes.imageUrl) {
        return (
          <img 
            src={ attributes.imageUrl }
            onClick={ openEvent }
            className="image"
          />
        );
      }
      else {
        return (
          <div className="button-container">
            <Button 
              onClick={ openEvent }
              className="button button-large"
            >
              Pick an image
            </Button>
          </div>
        );
      }
    };

    return (
      <Container>
        <MediaUpload
          onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
          type="image"
          value={ attributes.imageID }
          render={ ({ open }) => getImageButton(open) }
        />
        <PlainText
          onChange={ content => setAttributes({ title: content }) }
          value={ attributes.title }
          placeholder="Your card title"
          className="heading"
        />
        <RichText
          onChange={ content => setAttributes({ body: content }) }
          value={ attributes.body }
          multiline="p"
          placeholder="Your card text"
          formattingControls={ ['bold', 'italic', 'underline'] }
          isSelected={ attributes.isSelected }
        />
      </Container>
    );

  },

  save({ attributes }) {

    const cardImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img 
            className="card__image" 
            src={ src }
            alt={ alt }
          /> 
        );
      }
      
      // No alt set, so let's hide it from screen readers
      return (
        <img 
          className="card__image"
          src={ src }
          alt=""
          aria-hidden="true"
        /> 
      );
    };
    
    return (
      <div className="card">
        { cardImage(attributes.imageUrl, attributes.imageAlt) }
        <div className="card__content">
          <h3 className="card__title">{ attributes.title }</h3>
          <div className="card__body">
            { attributes.body }
          </div>
        </div>
      </div>
    );
  }
});