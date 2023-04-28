.Notifications {
	border: 3px dotted var(--holberton-red);
	padding: 6px 12px;
	position: relative;
	margin-top: 12px;
}

li[data-priority="default"] {
	color: blue;
}

li[data-priority="urgent"] {
	color: var(--holberton-red);
}

li[data-notification-type="default"] {
	color: blue;
}

li[data-notification-type="urgent"] {
	color: var(--holberton-red);
}
