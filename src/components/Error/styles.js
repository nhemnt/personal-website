import styled, { css } from 'styled-components'

export const StyledError = styled.div(
  () => css`
  	position: relative;
	height: 100vh;
  .notfound {
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);

  max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;

}



.notfound .notfound-404 {
	position: relative;
	height: 200px;
	margin: 0 auto 20px;
	z-index: -1
}

.notfound .notfound-404 h1 {
	font-family: montserrat, sans-serif;
	font-size: 236px;
	font-weight: 200;
	margin: 0;
	color: #211b19;
	text-transform: uppercase;
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%)
}

.notfound .notfound-404 h2 {
	font-family: montserrat, sans-serif;
	font-size: 28px;
	font-weight: 400;
	text-transform: uppercase;
	color: #211b19;
	background: #fff;
	padding: 10px 5px;
	margin: auto;
	display: inline-block;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0
}

.notfound a {
	font-family: montserrat, sans-serif;
	display: inline-block;
	font-weight: 700;
	text-decoration: none;
	color: #fff;
	text-transform: uppercase;
	padding: 13px 23px;
	background: #ff6300;
	font-size: 18px;
	-webkit-transition: .2s all;
	transition: .2s all
}

.notfound a:hover {
	color: #ff6300;
	background: #211b19
}

@media only screen and (max-width:767px) {
	.notfound .notfound-404 h1 {
		font-size: 148px
	}
}

@media only screen and (max-width:480px) {
	.notfound .notfound-404 {
		height: 148px;
		margin: 0 auto 10px
	}
	.notfound .notfound-404 h1 {
		font-size: 86px
	}
	.notfound .notfound-404 h2 {
		font-size: 16px
	}
	.notfound a {
		padding: 7px 15px;
		font-size: 14px
	}
}
  `)


