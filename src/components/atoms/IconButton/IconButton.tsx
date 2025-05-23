import { ReactSVG } from 'react-svg';

import * as S from './styles';
import { IProps } from './types';

export default function IconButton(props: IProps) {
	const buttonStyle = getType();
	const StyledButton = buttonStyle.wrapper;

	function getType() {
		let buttonObj: {
			wrapper: any;
		};

		switch (props.type) {
			case 'primary':
				buttonObj = {
					wrapper: S.Primary,
				};
				break;
			case 'alt1':
				buttonObj = {
					wrapper: S.Alt1,
				};
				break;
			default:
				buttonObj = {
					wrapper: S.Primary,
				};
				break;
		}
		return buttonObj;
	}

	function handlePress(e: any) {
		e.preventDefault();
		e.stopPropagation();
		props.handlePress();
	}

	function getAction() {
		return (
			<StyledButton
				tabIndex={props.noFocus ? -1 : 0}
				onClick={handlePress}
				disabled={props.disabled}
				active={props.active}
				sm={props.sm}
				warning={props.warning}
				dimensions={props.dimensions}
				className={props.className || ''}
			>
				<ReactSVG src={props.src} />
			</StyledButton>
		);
	}

	function getButton() {
		if (props.tooltip) {
			return (
				<S.Wrapper>
					<S.Tooltip className={'info'} position={props.tooltipPosition || 'bottom'}>
						<span>{props.tooltip}</span>
					</S.Tooltip>
					{getAction()}
				</S.Wrapper>
			);
		} else {
			return getAction();
		}
	}

	return getButton();
}
