import sashesColor from '../utils/color/color';

export const renderColor = (rating?: number) => {
    let color: string;
    if (rating) {
        switch (true) {
          case rating === 0:
            color = sashesColor.Grey;
            break;
          case rating < 50:
            color = sashesColor.Red;
            break;
          case rating >= 50 && rating < 70:
            color = sashesColor.Yellow;
            break;
          case rating >= 70:
            color = sashesColor.Green;
            break;
          default:
            color = '';
            break;
        }
        return color ;
    }
    return sashesColor.Grey;
  };